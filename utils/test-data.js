export const users= {
    standard: {username: 'standard_user', password: 'secret_sauce', shouldSucceed: true, errorMessage: null},
    lockedOut: {username: 'lockedout_user', password: 'secret_sauce', shouldSucceed: false, errorMessage: 'Epic sadface: Username and password do not match any user in this service'},
    problem :{username: 'problem_user', password:'secret_sauce', shouldSucceed: true, errorMessage: null},
    performanceGlitch: {username: 'performance_glitch_user', password: 'secret_sauce', shouldSucceed: true, errorMessage: null}
};