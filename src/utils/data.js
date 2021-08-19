const dataSchema = {
    query: `{ 
        user(login: "abisalde") {
        name
        avatarUrl
        bio
        name
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
