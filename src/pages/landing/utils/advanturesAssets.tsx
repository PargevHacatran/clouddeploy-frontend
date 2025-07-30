export interface IAdvantureCart {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface IAdvanturePlatforms {
    icon: React.ReactNode;
    title: string;
}

export const advanturesList = [
    {
        icon: <svg width="30" height="30" viewBox="0 0 30 30" style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }} fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="8" fill="#333333"/><path d="M17 9L11.0948 14.4131C11.0611 14.444 11.0829 14.5 11.1285 14.5H18.3793C18.4238 14.5 18.4461 14.5539 18.4146 14.5854L12.5 20.5" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>,
        title: "Lightning Fast",
        description: "Deploy application 10x faster with our optimized pipeline and intrligent caching system"
    },
    {
        icon: <svg width="30" height="30" viewBox="0 0 30 30" style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }} fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="8" fill="#333333"/><path d="M10 11V11.5695C10 13.4617 10.6707 15.2926 11.8929 16.7371L15.5 21V9L14.656 9.42198C13.2251 10.1375 11.7051 10.659 10.1363 10.9727L10 11Z" fill="white"/><path d="M15.5 9V21M15.5 9L14.656 9.42198C13.2251 10.1375 11.7051 10.659 10.1363 10.9727L10 11V11.5695C10 13.4617 10.6707 15.2926 11.8929 16.7371L15.5 21M15.5 9L16.344 9.42198C17.7749 10.1375 19.2949 10.659 20.8637 10.9727L21 11V11.5695C21 13.4617 20.3293 15.2926 19.1071 16.7371L15.5 21" stroke="white" stroke-width="2"/></svg>,
        title: "Enterprise Security",
        description: "Bank -level encryption and compliance with SOC2, GDPR and HIPAA standarts"
    },
    {
        icon: <svg width="30" height="30" viewBox="0 0 30 30" style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }} fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="8" fill="#333333"/><path d="M12 12L9.03536 14.9646C9.01583 14.9842 9.01583 15.0158 9.03536 15.0354L12 18" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M17.5 9L14 21" stroke="white" stroke-width="2" stroke-linecap="round"/><path d="M19.5 18L21.9708 15.0351C21.9873 15.0152 21.986 14.986 21.9677 14.9677L19.5 12.5" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>,
        title: "Developer First",
        description: "Intuitive CLI, comprehensive APIs and seamless intergration with your existing workflow"
    },
];

export const downtimeList = [
    "Automated health checks",
    "Instant rollback capability",
    "Real-time monitoring"
];