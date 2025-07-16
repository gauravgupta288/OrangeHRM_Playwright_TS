export function getUrl(env: string): string {
    switch(env.toLowerCase()) {
        case 'dev' : 
            return 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
        case 'staging' : 
            return 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
        case 'prod' : 
            return 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
        default:
            throw new Error(`Unknown environment: ${env}`);
    }
}