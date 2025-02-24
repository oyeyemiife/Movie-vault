declare module '../../services/authService' {
    interface SignupData {
        username: string;
        email: string;
        password: string;
    }

    interface LoginData {
        email: string;
        password: string;
    }

    export const signup: (userData: SignupData) => Promise<any>;
    export const login: (credentials: LoginData) => Promise<any>;
}
