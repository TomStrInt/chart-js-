import * as d3 from "d3";


d3.csv(filename).then(function(loadedData) {

    let data = [];
    let labels = [];

    for(let i=0; i<loadedData.length; i++ ){
        console.log(loadedData[i]);

    
    }
});

/*
(async () => {
    const cars = await csv().fromfile('data/drogi-rowerowe-gus.csv');
    console.log(cars);
}
)
*/