export interface IFAQItem {
    title: string;
    description: TrustedHTML;
}

export const faqList: IFAQItem[] = [
    {
        title: "What types of applications can you deploy ?",
        description: "We support web apps (Node.js, PHP, Python, Ruby, etc.), containers (Docker), static sites (Next.js, React, Vue), mobile aaplications (Swift, Dart, Kotlin) databases (MySQL, PostgreSQL, Redis), and backend services (Laravel, Django, Spring Boot, .NET). If your stack isn’t listed, contact us—we likely still support it!"
    }, 
    {
        title: "How do you ensure deployment security ?",
        description: "We use SSH key-based access, encrypted secrets (Vault/KMS), DDoS protection, and automated vulnerability scans. All deployments run in isolated environments (VMs/containers) with strict permissions."
    },
    {
        title: "Can I deploy manually, or is it only CI/CD ?",
        description: "Both! You can: \n\n - <b>Trigger manual deployments</b> via our dashboard.\n - <b>Set up CI/CD</b> (GitHub Actions, GitLab CI, or our built-in pipelines)."
    },
    {
        title: "Do you support zero-downtime deployments ?",
        description: "Yes! We use blue-green deployments, rolling updates, and health checks to ensure no downtime during updates."
    },
    {
        title: "How do you handle database migrations ?",
        description: "<b>Automated:</b> We run migrations in a controlled order (if you provide scripts).\n<b>Rollback-ready:</b> Failed migrations auto-revert, and we backup data before changes."
    },
    {
        title: "What if my deployment fails ?",
        description: "<b>Automatic rollback</b> to the last stable version.\n<b>Real-time logs</b> to debug issues.\n<b>Alert notifications</b> (Slack/Email) for immediate action"
    },
    {
        title: " Can I scale my app after deployment ?",
        description: "Yes! Scale vertically (CPU/RAM) or horizontally (load-balanced instances) with 1 click. Auto-scaling based on traffic is also supported."
    },
    {
        title: "How much does it cost ?",
        description: "Pricing depends on:\n\n- <b>Resources</b> (CPU, RAM, storage).\n- <b>Deployment frequency</b> (unlimited for CI/CD).\n- <b>Add-ons</b> (monitoring, backups).\n\nWe offer pay-as-you-go and fixed monthly plans."
    },
    {
        title: "Do you provide backups ?",
        description: "Yes! Daily automated backups (with retention policies). You can also trigger on-demand backups before major updates."
    },
    {
        title: " How do I get started ?",
        description: "<b>Sign up</b> and link your Git repo or upload code.\n<b>Configure</b> your environment (variables, dependencies).\n<b>Deploy</b>—instantly or via CI/CD.\n\nNeed help? Our docs and 24/7 support are ready!"
    },
];