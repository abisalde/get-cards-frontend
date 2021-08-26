const dataSchema = {
    query: `{ 
        user(login: "abisalde") {
        name
        avatarUrl
        bio
        name
        followers {
            totalCount
            }
        following {
        totalCount
            }
        starredRepositories {
        totalCount
            }
        location
        twitterUsername
        repositories(privacy: PUBLIC, first: 20, orderBy: {direction: DESC, field: CREATED_AT}) {
            totalCount
                edges {
                node {
                    name
                    updatedAt
                    stargazerCount
                    forkCount
                    description
                    url
                    languages(first: 1) {
                    edges {
                        node {
                        color
                        name
                        }
                    }
                    }
                    }
                }
        }
        }
    }`,
};

module.exports = dataSchema;
