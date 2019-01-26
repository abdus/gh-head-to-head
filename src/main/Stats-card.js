import React from 'react';
import './Stats-card.css'

export const StatsCard = (props) => {
    console.log(props)
    return (
        <>
            <div className='card'>
                <div className="title text-center">{props.data.name}</div>
                <div className="location gray-text text-center">{props.data.location}</div>
                <div className="image">
                    <img src={props.data.avatarUrl} alt=""/>
                </div>
                <p className="bio">{props.data.bio}<br/><br/><em>{props.data.email}</em></p>
                <div className="user-data">
                    <div className="repo-count">
                        <span>Repo Count</span>
                        <strong>{props.data.repositories.totalCount}</strong>
                    </div>
                    <div>
                        <span>Commits</span>
                        <strong>{props.data.contributionsCollection.totalCommitContributions}</strong>
                    </div>
                    <div>
                        <span>Pull Requests</span>
                        <strong>{props.data.contributionsCollection.totalPullRequestContributions}</strong>
                    </div>
                    <div>
                        <span>Repo Contributed To</span>
                        <strong>{props.data.repositoriesContributedTo.totalCount}</strong>
                    </div>
                    <div>
                        <span>Organizations</span>
                        <strong>{props.data.organizations.totalCount}</strong>
                    </div>
                </div>
            </div>
        </>
    );
}