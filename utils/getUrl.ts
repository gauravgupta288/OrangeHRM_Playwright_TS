export function getUrl(env: string): string {
    switch(env.toLowerCase()) {
        case 'dev' : 
            return 'https://dev.example.com';
        case 'staging' : 
            return 'https://staging.example.com';
        case 'prod' : 
            return 'https://prod.example.com';
        default:
            throw new Error(`Unknown environment: ${env}`);
    }
}