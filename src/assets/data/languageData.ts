export type Language = {
    name: string;
    description: string;
    projects: {
        title: string;
        summary: string;
        githubLink: string | null;
        liveLink: string | null;
    }[];
};

export const languages: Language[] = [
    {
        name: "JavaScript",
        description:
            "Experienced JavaScript developer with a year of hands-on expertise in crafting dynamic and interactive web applications. Proficient in leveraging the power of JavaScript to create responsive and user-friendly interfaces. Well-versed in client-side scripting, asynchronous programming, and utilizing the latest technologies to enhance the overall user experience. Adept at combining object-oriented and functional programming paradigms to deliver robust and scalable solutions. Passionate about staying current with industry trends and continuously refining skills to contribute effectively to innovative projects.",
        projects: [
            {
                title: "Daily Price Tracker",
                summary: "A full-stack web app that tracks and displays daily product prices with live updates.",
                githubLink: "https://github.com/Sadman-Sakib748/e-comarse-client",
                liveLink: "https://assignment-12-52342.web.app/",
            },
            {
                title: "Golden Peak",
                summary: "A full-stack website for a camping school",
                githubLink: "https://github.com/Sadman-Sakib748/Golden-Peaks-Client",
                liveLink: "https://assignment-12-1c977.web.app/",
            },
            {
                title: "Playful Delights",
                summary: "A full-stack website for a toy store",
                githubLink: "https://github.com/Sadman-Sakib748/Playful-Delights",
                liveLink: "https://assignment-11-a4819.web.app/",
            },
            {
                title: "Kitchen Diaries",
                summary:
                    "A complete website for a kitchen for users to discover",
                githubLink:
                    "https://github.com/Mahabub175/Kitchen-Diaries-Client",
                liveLink: "https://assignment-10-2d8e2.web.app/",
            },
        ],
    },
    {
        name: "TypeScript",
        description:
            "Seasoned TypeScript developer with a year of dedicated experience in building robust and scalable web applications. Proficient in harnessing TypeScript's strong typing and advanced features to enhance code quality and maintainability. Skilled in seamlessly integrating TypeScript into modern development workflows, promoting cleaner code architecture and better collaboration within teams. Extensive knowledge of leveraging TypeScript for both front-end and back-end development, ensuring a consistent and reliable development experience. Committed to staying at the forefront of TypeScript advancements to deliver cutting-edge solutions.",
        projects: [
            {
                title: "Recipe Manager",
                summary: "A full-stack website for managing recipes",
                githubLink: "https://github.com/Sadman-Sakib748/Redux-Todo-App",
                liveLink: "https://redux-todo-app-theta.vercel.app/",
            },
            {
                title: "User Manager",
                summary: "A full-stack website for managing users",
                githubLink: "https://github.com/Sadman-Sakib748/User-Manager",
                liveLink: "https://user-manager-omega.vercel.app/",
            },
        ],
    },
];
