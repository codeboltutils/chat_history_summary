// Test for summarize_all method
const assert = require('assert');
const { ChatSummary } = require('.');

function testSummarizeAll() {
    const chatSummary = new ChatSummary(1024, msg => msg.length, 4096);


    let existingFormat =[{
        "type": "agentMessage",
        "message": [
            {
                "role": "system",
                "content": "You are a world class software architect.\nYou focus on creating architecture for Minimum Viable Product versions of apps developed as fast as possible with as many ready-made technologies as possible."
            },
            {
                "role": "user",
                "content": "You're designing the architecture and technical specifications for a new project.\n\nIf the project requirements call out for specific technology, use that. Otherwise, if working on a web app, prefer Node.js for the backend (with Express if a web server is needed, and MongoDB if a database is needed), and Bootstrap for the front-end. You MUST NOT use Docker, Kubernetes, microservices and single-page app frameworks like React, Next.js, Angular, Vue or Svelte unless the project details explicitly require it.\n\nHere are the details for the new project:\n-----------------------------\nHere is a high level description of \"casual-violet\":\nCreate a Node.js application using Express framework, MongoDB with Mongoose ORM, and EJS view engine. The front-end should use vanilla JavaScript and Bootstrap for styling.\n\nThe application will allow users to register/login and interact with the application. The focus is to provide a basic and clean user interface.\n\nImplement the following pages and features:\n\n1. Overall Description and Goals:\n    * A web application enabling user registration and simple interactions like posting content.\n\n2. Features of the Application:\n    * User registration and login/logout.\n    * User can post content.\n    * View latest posts from users.\n\n3. Functional Specification:\n    * User Interface (UI) will be simple and clean, using Bootstrap for styling.\n    * Use EJS view engine to render server-side pages.\n    * User authentication using simple username and password.\n\n4. Pages of the Application:\n    * Home Page (&#x27;/&#x27;): Displays latest posts from users.\n    * Login Page (&#x27;/login&#x27;): Form for user login (username, password).\n    * Register Page (&#x27;/register&#x27;): Form for user registration (username, password).\n    * Post Page (&#x27;/post&#x27;): Form to submit new content (valid users only).\n\n5. User Flows:\n    * User Registration: \n        - Go to /register page.\n        - Fill in username and password.\n        - Upon submission, create user account, redirect to login page.\n    * User Login:\n        - Go to /login page.\n        - Fill in username and password to log in.\n        - Upon successful login, redirect to home page.\n    * Posting Content:\n        - Go to /post page (users must be logged in).\n        - Fill in content form.\n        - Upon submission, save the content and redirect to home page.\n\n6. Technical Specification:\n    * Application Structure:\n        - Backend: Node.js with Express framework.\n        - Database: MongoDB with Mongoose ORM.\n        - Frontend: Plain JavaScript and Bootstrap for UI, using EJS for templating.\n    * Authentication: Implemented using session-based authentication.\n\n7. Detailed Description of Each Component:\n    * Backend:\n        - Users schema with username and password fields.\n        - Posts schema with user reference and content fields.\n        - Routes for user registration, login, and posting content.\n    * Frontend:\n        - EJS templates for rendering HTML pages.\n        - Bootstrap for styling forms and layout.\n        - JavaScript for basic client-side interactions.\n\n8. Integration Specification:\n    * No 3rd party apps, services, or APIs required for this basic implementation.\n\nPages and Routes:\n\n* / - Home Page: Lists latest posts from users.\n* /login - Login Page: Login form with username, password, and login button.\n* /register - Register Page: Registration form with username, password, and register button.\n* /post - Post Page: Content form for users to post new content.\n\nKey Dependencies:\n\n* Node.js\n* Express.js\n* MongoDB\n* Mongoose\n* EJS\n* Bootstrap\n* Express-session (for session-based authentication)\nAdditional info/examples:\n&#x27;&#x27;\n-----------------------------\n\nBased on these details, think step by step to design the architecture for the project and choose technologies to use in building it.\n\n1. First, design and describe project architecture in general terms\n2. Then, list any system dependencies that should be installed on the system prior to start of development. For each system dependency, output a  command to check whether it's installed.\n3. Finally, list any other 3rd party packages or libraries that will be used (that will be installed later using a package manager in the project repository/environment).\n4. \nOptionally, choose a project starter template.\n\nYou have an option to use a project template that implements standard boilerplate/scaffolding so you can start faster and be more productive. To be considered, a template must be compatible with the architecture and technologies you've chosen (it doesn't need to implement everything that will be used in the project, just a useful subset). If multiple templates can be considered, pick one that's the best match.\n\nIf no project templates are a good match, don't pick any! It's better to start from scratch than to use a template that is not a good fit for the project and then spend time reworking it to fit the requirements.\n\nHere are the available project templates:\n### node_express_mongoose\n\n\nContains:\n\n### javascript_react\n\n\nContains:\n\n\n*IMPORTANT*: You must follow these rules while creating your project:\n\n* You must only list *system* dependencies, ie. the ones that need to be installed (typically as admin) to set up the programming language, database, etc. Any packages that will need to be installed via language/platform-specific package managers are *not* system dependencies.\n* If there are several popular options (such as Nginx or Apache for web server), pick one that would be more suitable for the app in question.\n* DO NOT include text editors, IDEs, shells, OpenSSL, CLI tools such as git, AWS, or Stripe clients, or other utilities in your list. Only direct dependencies required to build and run the project.\n* If a dependency (such as a database) has a cloud alternative or can be installed on another computer (i.e., isn't required on this computer), you must mark it as `required_locally: false`.\n\nOutput only your response in JSON format like in this example, without other commentary:\n```json\n{\n    \"architecture\": \"Detailed description of the architecture of the application\",\n    \"system_dependencies\": [\n        {\n            \"name\": \"Node.js\",\n            \"description\": \"JavaScript runtime for building apps. This is required to be able to run the app you're building.\",\n            \"test\": \"node --version\",\n            \"required_locally\": true\n        },\n        {\n            \"name\": \"MongoDB\",\n            \"description\": \"NoSQL database. If you don't want to install MongoDB locally, you can use a cloud version such as MongoDB Atlas.\",\n            \"test\": \"mongosh --version\",\n            \"required_locally\": false\n        },\n        ...\n    ],\n    \"package_dependencies\": [\n        {\n            \"name\": \"express\",\n            \"description\": \"Express web server for Node\"\n        },\n        ...\n    ],\n    \"template\": \"name of the project template to use\" // or null if you decide not to use a project template\n}\n"
            },
            {
                "role": "user",
                "content": "IMPORTANT: Your response MUST conform to this JSON schema:\n```\n{\"$defs\": {\"PackageDependency\": {\"properties\": {\"name\": {\"default\": null, \"description\": \"Name of the package dependency, for example Express or React.\", \"title\": \"Name\", \"type\": \"string\"}, \"description\": {\"default\": null, \"description\": \"One-line description of the dependency.\", \"title\": \"Description\", \"type\": \"string\"}}, \"title\": \"PackageDependency\", \"type\": \"object\"}, \"ProjectTemplateEnum\": {\"description\": \"Choices of available project templates.\", \"enum\": [\"node_express_mongoose\", \"javascript_react\"], \"title\": \"ProjectTemplateEnum\", \"type\": \"string\"}, \"SystemDependency\": {\"properties\": {\"name\": {\"default\": null, \"description\": \"Name of the system dependency, for example Node.js or Python.\", \"title\": \"Name\", \"type\": \"string\"}, \"description\": {\"default\": null, \"description\": \"One-line description of the dependency.\", \"title\": \"Description\", \"type\": \"string\"}, \"test\": {\"default\": null, \"description\": \"Command line to test whether the dependency is available on the system.\", \"title\": \"Test\", \"type\": \"string\"}, \"required_locally\": {\"default\": null, \"description\": \"Whether this dependency must be installed locally (as opposed to connecting to cloud or other server)\", \"title\": \"Required Locally\", \"type\": \"boolean\"}}, \"title\": \"SystemDependency\", \"type\": \"object\"}}, \"properties\": {\"architecture\": {\"default\": null, \"description\": \"General description of the app architecture.\", \"title\": \"Architecture\", \"type\": \"string\"}, \"system_dependencies\": {\"default\": null, \"description\": \"List of system dependencies required to build and run the app.\", \"items\": {\"$ref\": \"#/$defs/SystemDependency\"}, \"title\": \"System Dependencies\", \"type\": \"array\"}, \"package_dependencies\": {\"default\": null, \"description\": \"List of framework/language-specific packages used by the app.\", \"items\": {\"$ref\": \"#/$defs/PackageDependency\"}, \"title\": \"Package Dependencies\", \"type\": \"array\"}, \"template\": {\"anyOf\": [{\"$ref\": \"#/$defs/ProjectTemplateEnum\"}, {\"type\": \"null\"}], \"default\": null, \"description\": \"Project template to use for the app, if any (optional, can be null).\"}}, \"title\": \"Architecture\", \"type\": \"object\"}\n``` Note: Do not send any explanation, only this schema."
            }
        ]
    },
    {
        "type": "aiResponse",
        "message": {
            "id": "chatcmpl-A1B1isZlokv8EtUbxkubsldjB5IkZ",
            "object": "chat.completion",
            "created": 1724844078,
            "model": "gpt-4o-2024-05-13",
            "choices": [
                {
                    "index": 0,
                    "message": {
                        "role": "assistant",
                        "content": "```json\n{\n    \"architecture\": \"The application 'casual-violet' is a Node.js-based web application using the Express framework. MongoDB with Mongoose ORM will be utilized for data storage, and EJS will be used as the view engine for server-side rendering of HTML pages. The front-end will be styled using Bootstrap and will leverage vanilla JavaScript for any client-side interactions. User authentication will be handled via session-based authentication using express-session.\",\n    \"system_dependencies\": [\n        {\n            \"name\": \"Node.js\",\n            \"description\": \"JavaScript runtime for building apps. This is required to be able to run the app you're building.\",\n            \"test\": \"node --version\",\n            \"required_locally\": true\n        },\n        {\n            \"name\": \"MongoDB\",\n            \"description\": \"NoSQL database. If you don't want to install MongoDB locally, you can use a cloud version such as MongoDB Atlas.\",\n            \"test\": \"mongosh --version\",\n            \"required_locally\": false\n        }\n    ],\n    \"package_dependencies\": [\n        {\n            \"name\": \"express\",\n            \"description\": \"Express web server for Node\"\n        },\n        {\n            \"name\": \"mongoose\",\n            \"description\": \"MongoDB ORM for Node.js\"\n        },\n        {\n            \"name\": \"ejs\",\n            \"description\": \"Embedded JavaScript templating engine\"\n        },\n        {\n            \"name\": \"express-session\",\n            \"description\": \"Session middleware for Express\"\n        },\n        {\n            \"name\": \"body-parser\",\n            \"description\": \"Middleware to parse incoming request bodies.\"\n        },\n        {\n            \"name\": \"connect-flash\",\n            \"description\": \"Flash message middleware for Express\"\n        }\n    ],\n    \"template\": \"node_express_mongoose\"\n}\n```",
                        "refusal": null
                    },
                    "logprobs": null,
                    "finish_reason": "stop"
                }
            ],
            "usage": {
                "prompt_tokens": 2051,
                "completion_tokens": 376,
                "total_tokens": 2427
            },
            "system_fingerprint": "fp_157b3831f5"
        }
    }]

    const acceptedFormat = convertFormat(existingFormat);
    console.log(acceptedFormat);
    const expectedOutput = [
        { role: 'system', content: summarize },
        { role: 'user', content: '# USER\nHello, how can I help you?\n# ASSISTANT\nI need help with my code.\n# USER\nSure, what seems to be the problem?\n# ASSISTANT\nI am getting an error.\n' }
    ];

    const result = chatSummary.summarize_all(acceptedFormat);
    console.log(result)
    assert.deepStrictEqual(result, expectedOutput, 'summarize_all did not return the expected output');
    console.log('Test passed!');
}

testSummarizeAll();