function $g(selector) {
    //node;ist至少包含一個node - Element object
    //如果沒有符合的，則是一個empty NodeList
    let nobelist = document.querySelectorAll(selector);
    if (nobelist.length == 0) {
        return null;
    }

    return nobelist.length == 1 ? nobelist[0] :
        nobelist;
}



function $drawPieChart(companyArray, dataArray) {
    //Pie Chart圓餅圖
    let ctxPie = document.getElementById("mkShare");
    var pieChart = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: companyArray,
            datasets: [{
                data: dataArray,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255,75,50)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)',
                    'rgb(255, 138, 64)',
                    'rgb(142, 65, 64)',
                    'rgb(59, 72, 64)'
                ]
            }],
        },
        options: {
            responsive: true,
            title: {
                display: true,
                fontSize: 26,
                text: '2021年全球晶圓代工市佔率%'
            },
            tooltips: {
                mode: 'point',
                intersect: true,
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontColor: 'black',
                }
            }
        }
    });
}

export{$g,$drawPieChart}

