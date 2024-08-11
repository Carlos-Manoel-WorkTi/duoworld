    export const calculateSongPercentage = (currentTime: number, totalTime: number | undefined): number => {
        if (!totalTime || totalTime === 0) return 0;
        const percentage = (currentTime / totalTime) * 100;
        return percentage;
    };
    