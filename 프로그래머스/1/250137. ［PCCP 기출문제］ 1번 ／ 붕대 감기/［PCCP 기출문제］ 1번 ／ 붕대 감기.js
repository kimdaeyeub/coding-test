function solution(bandage, health, attacks) {
    let currentTime = 0; 
    let currentHealth = health; 
    let continuousSuccess = 0; 
    let attackIndex = 0; 

    const lastAttackTime = attacks[attacks.length - 1][0];

    while (currentTime <= lastAttackTime) {
        if (attackIndex < attacks.length && currentTime === attacks[attackIndex][0]) {
            currentHealth -= attacks[attackIndex][1];
            continuousSuccess = 0; 
            attackIndex++; 

            if (currentHealth <= 0) {
                return -1;
            }
        } else {

            if (currentHealth < health) { 
                currentHealth += bandage[1];
                if (currentHealth > health) {
                    currentHealth = health; 
                }
            }

            continuousSuccess++;
            if (continuousSuccess === bandage[0]) {
                currentHealth += bandage[2];
                if (currentHealth > health) {
                    currentHealth = health; 
                }
                continuousSuccess = 0; 
            }
        }

        currentTime++;
    }

    return currentHealth;
}