import React from 'react';
import  * as echarts from 'echarts';
import '../App.css'

import ReactECharts from 'echarts-for-react';

export const DataScreen=()=> {
    var option;
    var option2;
    var option3;
    var option4;
    option4 = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [
              120,
              {
                value: 200,
                itemStyle: {
                  color: '#a90000'
                }
              },
              150,
              80,
              70,
              110,
              130
            ],
            type: 'bar'
          }
        ]
      };
    option3 = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }
        ]
      };
    option2 = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };
    option = {
        title:{
            text:'RIESGOS',
            left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: '10%',
          top:'10%'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            top:'10%',
            radius: '75%',
            data: [
              { value: 1048, name: 'Agua' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 100, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
    // exact le dice a react router que se tiene que utilizar la ruta exactamente como esta escrita
    // <Route exact path="/" component={HomeScreen}/>
    return (
        <div className='container'>
            <div className="row border">
                 <img src="../images/descarga.jpg" className="img-fluid my-3" alt="map"/>
                 <div className="d-flex justify-content-center">
                    <div className="card my-3" style={{width: '18rem'}}>
                        <div className="card-header">
                            Featured
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="col-3">
                <ReactECharts option={option2}/>

                </div>
                <div className="col-3">
                <ReactECharts option={option3}/>

                </div>
                <div className="col-3">
                <ReactECharts option={option4}/>

                </div>
                <div className="col-3">
                <ReactECharts option={option2}/>

                </div>
            </div>

            {/* <div className="d-flex justify-content-center">

                <div className="card my-3" style={{width: '18rem'}}>
                    <div className="card-header">
                        Featured
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                </div>
    
            </div> */}

            
           
            <div className="row border">
                <div className="col-12  py-3">
                    <ReactECharts option={option}/>

                </div>
                <div className="col-3 ">
                    <div className="card text-white bg-primary mb-3" >
                        <div className="card-header">Agua</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-body bg-warning">
                            <ReactECharts option={option2}/>
                        </div>

                        
                    </div>
                </div>

                <div className="col-3">
                    <div className="card text-white bg-primary mb-3" >
                       
                        <div className="card-header ">Agua</div>
                            <div className="bg-secondary">
                            <div className="card-body bg-success">
                                <h5 className="card-title">Recomendaciones</h5>
                                <ul>
                                    <li>
                                        fndkslnf
                                    </li>
                                    <li>
                                        Hola
                                    </li>

                                    <li>
                                        Hola
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div>
                            <div className="card-body">
                                <h5 className="card-title">Primary card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>

                        </div>
                        
                        <div>
                            <div className="card-body">
                                <h5 className="card-title">Primary card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        
                        </div>
                        <div className="card-body bg-warning">
                            <ReactECharts option={option2}/>
                        </div>
                        
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-white bg-primary mb-3" >
                       
                       <div className="card-header ">Header</div>
                           <div className="bg-secondary">
                           <div className="card-body bg-success">
                               <h5 className="card-title">Recomendaciones</h5>
                               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           </div>
                       </div>
                       
                       <div>
                           <div className="card-body">
                               <h5 className="card-title">Primary card title</h5>
                               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           </div>

                       </div>
                       
                       <div>
                           <div className="card-body">
                               <h5 className="card-title">Primary card title</h5>
                               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           </div>
                       
                       </div>
                       <div className="card-body bg-warning">
                            <ReactECharts option={option2}/>
                        </div>
                       
                   </div>
                </div>
                <div className="col-3">
                    <div className="card text-white bg-primary mb-3" >
                       
                       <div className="card-header ">Header</div>
                           <div className="bg-secondary">
                           <div className="card-body bg-success">
                               <h5 className="card-title">Recomendaciones</h5>
                               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           </div>
                       </div>
                       
                       <div>
                           <div className="card-body">
                               <h5 className="card-title">Primary card title</h5>
                               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           </div>

                       </div>
                       
                       <div>
                           <div className="card-body">
                               <h5 className="card-title">Primary card title</h5>
                               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           </div>
                       
                       </div>
                       <div className="card-body bg-warning">
                            <ReactECharts option={option2}/>
                        </div>
                       
                   </div>
                </div>
               
            
            
                <h1 className="text-center">IMAGES</h1>
                <div className="box col-3">
                    <img src="../images/descarga.jpg"/>
                    <span>fuego</span>
                </div>
                <div className="box col-3">
                    <img src="../images/descarga.jpg"/>
                    <span>tierra</span>
                </div>
                <div className="box col-3">
                    <img src="../images/descarga.jpg"/>
                    <span>agua</span>
                </div>
                <div className="box col-3">
                    <img src="../images/descarga.jpg"/>
                    <span>Hola</span>
                </div>
            </div>
            
           

        </div>

    );
}
