declare global {
    const __APP_VERSION__: string
    const __APP_BUILD_TIME__: string
    const __APP_INFO__: {
        name: string
        version: string
        dependencies: Recordable<string>
        devDependencies: Recordable<string>
    }

    declare type Recordable<T = any> = Record<string, T>
}