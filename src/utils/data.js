const dataSchema = {
    query: `{
        viewer {
        login
        avatarUrl
        bio
        name
        repositories(affiliations: OWNER, last: 20) {
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
        location
        }
    }`,
};

module.exports = dataSchema;
