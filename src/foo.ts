interface databaseItem {
    debutChart: number,
    positions: number[],
};

function getUniqueEntries(entries: string[]): Set<string> {
    const uniqueEntries = new Set(entries);

    return uniqueEntries;
}

function createDatabase(charts: Chart[]) {
    const uniqueEntries = getUniqueEntries(charts.flat(2));
    const database: Map<string, databaseItem> = new Map();

    // For each item `item` in `items`.
    uniqueEntries.forEach((entry, index) => {
        const databaseItem = {
            debutChart: -1,
            positions: [],
        };

        database.set(entry, databaseItem);
    });

    // For each chart `chart` in `charts`.
    charts.forEach((chart, index1, array) => {
        if (typeof chart !== 'string') {
            chart.reverse();
        }
        else {
            const databaseItem = database.get(chart);
            databaseItem.debutChart = index1;
            return;
        }

        // For each chart `chart` in `charts`.
        chart.forEach((entry: string, index2) => {
            const databaseItem = database.get(entry); 
            const positions = databaseItem?.positions

            if (databaseItem?.debutChart === -1) {
                databaseItem.debutChart = index1 + 1;
            }

            positions?.push(index2 + 1);

            if (typeof array[index1 + 1] === 'string') {
                positions?.push(-1);
            }
        });
    });

    return database;
}

const database = createDatabase(charts.flat());


