function solution(N, stages) {
    let result = [];
    let totalUsers = stages.length;

    for (let i = 1; i <= N; i++) {
        let usersOnStage = stages.filter(stage => stage === i).length;
        let failureRate = totalUsers > 0 ? usersOnStage / totalUsers : 0;
        result.push({ stage: i, rate: failureRate });
        totalUsers -= usersOnStage;
    }

    result.sort((a, b) => b.rate - a.rate || a.stage - b.stage);
    return result.map(obj => obj.stage);
}
