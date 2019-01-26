import React from 'react';
import gql from "graphql-tag";
import client from '../ApolloClient';
import MenuAppBar from '../nav'
import SearchBar from './Search'
import { StatsCard } from './Stats-card'

export default class MainUI extends React.Component {
    constructor() {
        super();

        // state
        this.state = {
            ghUsernames: [],
            ghUserData: []
        }
    }
    
    handleFormSubmit(e) {

        // setState so that all previously available data is been removed
        this.setState({
            ghUsernames: [],
            ghUserData: []
        })

        e.preventDefault();

        // forEach each GH username and setState accordingly 
        this.state.ghUsernames.forEach((val) => {
            val = val.trim();
            
            if(val.length <= 0) return;
            if (!val) return;

            val.trim();
            client.query({
                query: gql`
                    query {
                        user(login: ${val}) {
                            name
                            bio
                            avatarUrl
                            location
                            email
                            
                            contributionsCollection {
                              totalCommitContributions
                                totalPullRequestContributions
                              totalIssueContributions
                            }
                            
                            
                            pullRequests {
                              totalCount
                            }
                            
                            starredRepositories {
                              totalCount
                            }
                            
                            repositoriesContributedTo {
                              totalCount
                            }
                            
                            followers {
                              totalCount
                            }
                            following {
                              totalCount
                            }
                            repositories(last: 1) {
                              totalCount
                            }
                            
                            organizations {
                              totalCount
                            }
                        }
                    }
                `
            })
            .then(d => {
                this.setState(prevState => ({
                    ghUserData: [...prevState.ghUserData, d.data.user]
                }))
            })
            .catch(err => console.log(err))
        })
    }

    handleInputChange(e) {
        this.setState({
            ghUsernames: (e.target.value).split(',')
        })
    }

    render() {
        return (
            <>
                <MenuAppBar/>
                <SearchBar 
                    handleFormSubmit={this.handleFormSubmit.bind(this)}
                    handleInputChange={this.handleInputChange.bind(this)}
                />
                <div className="stats">
                    {this.state.ghUserData.map((val, i) => <StatsCard
                        key={i}
                        data={val}
                    />)}
                </div>
            </>
        )
    }
}