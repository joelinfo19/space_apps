import React from 'react';
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
        title: {
            text: 'Distribution of Electricity',
            subtext: 'Fake Data'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          toolbox: {
            show: true,
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            // prettier-ignore
            data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} W'
            },
            axisPointer: {
              snap: true
            }
          },
          visualMap: {
            show: false,
            dimension: 0,
            pieces: [
              {
                lte: 6,
                color: 'green'
              },
              {
                gt: 6,
                lte: 8,
                color: 'red'
              },
              {
                gt: 8,
                lte: 14,
                color: 'green'
              },
              {
                gt: 14,
                lte: 17,
                color: 'red'
              },
              {
                gt: 17,
                color: 'green'
              }
            ]
          },
          series: [
            {
              name: 'Electricity',
              type: 'line',
              smooth: true,
              // prettier-ignore
              data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
              markArea: {
                itemStyle: {
                  color: 'rgba(255, 173, 177, 0.4)'
                },
                data: [
                  [
                    {
                      name: 'Morning Peak',
                      xAxis: '07:30'
                    },
                    {
                      xAxis: '10:00'
                    }
                  ],
                  [
                    {
                      name: 'Evening Peak',
                      xAxis: '17:30'
                    },
                    {
                      xAxis: '21:15'
                    }
                  ]
                ]
              }
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
            data: [60, 50, 150, 80, 70, 110, 130],
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
          left: '%',
          top:'5%'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            top:'10%',
            radius: '75%',
            data: [
              { value: 735, name: 'DESBORDAMIENTO DEL RIO' },
              { value: 580, name: 'DEFORESTACION ILEGAL' },
              { value: 484, name: 'DETECCION DE PLANTACION DE COCA ILEGAL' },
              { value: 100, name: 'DETECCION DE MINERAS ILEGALES' }
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
        <div className='container bg-white'>
            <div className="row border">
                 <img src="../images/mapa.jpeg" className="img-fluid my-3" alt="map"/>
                 <div className="d-flex justify-content-center ">
                    <div className="card my-3 bg-secondary" style={{width: '18rem'}}>
                        <div className="card-header text-white">
                            Leyenda
                        </div>
                        <ul className="list-group list-group-flush ">
                            <li className="list-group-item bg-secondary text-white">Manchas rojas </li>
                            <li className="list-group-item bg-secondary text-white">Vegetacion</li>
                            <li className="list-group-item bg-secondary text-white">Rios</li>
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
                       
                       <div className="card-header ">DETECCION DE MINERAS ILEGALES</div>
                           <div className="bg-secondary">
                           <div className="card-body bg-success">
                               <h5 className="card-title">Detalles</h5>
                               <ul>
                                   <li>
                                   SE DETECTO DOS ZONAS CON AUSENCIA DE COBERTURA ARBOREA CON CORDENADAS DONDE SE PRACTICA MINERIA ILEGAL
                                   </li>
                                   <li>
                                    ZONA1: LATITUD: -5.958469
                                        LONGITUD: -76.913632
                                    
                                   </li>
                                 
                                   <li>
                                    ZONA 2: LATITUD: -6.190238
                                            LONGITUD: -77.224147
                                   </li>
                               </ul>
                           </div>
                       </div>
                       
                       <div>
                           <div className="card-body">
                               <h5 className="card-title">Recomendaciones</h5>
                               <p className="card-text">SE RECOMIENDA INFORMAR A LAS AUTORIDADES RESPECTIVAS PARA SU OPORTUNO CONTROL.</p>
                           </div>

                       </div>
                       
                       <div>
                           <div className="card-body">
                               <h5 className="card-title">Beneficios</h5>
                               <p>SE ESTIMA UNA RE-COBERTURA ARBOREA EN UN APROXIMADO DE 4 AÑOS DE ESTA MANERA GANANDO UN AREA FORESTADA DE 5 HECTAREAS </p>
                           </div>
                       
                       </div>
                       <div className="card-body bg-warning">
                           <ReactECharts option={option2}/>
                       </div>
                       
                   </div>
                </div>

                <div className="col-3">
                    <div className="card text-white bg-primary mb-3" >
                       
                        <div className="card-header ">DETECCION DE PLANTACION DE COCA ILEGAL</div>
                            <div className="bg-secondary">
                            <div className="card-body bg-success">
                                <h5 className="card-title">Detalles</h5>
                                <ul>
                                    <li>
                                    SE DETECTO ZONAS CON PRESENCIA DE TONALIDAD VERDOZA PARTICULAR DE PLANTACIONES DE COCA.

                                    </li>
                                    <li>
                                    ZONA1: LATITUD: -6.104693
	                                       
                                    </li>

                                    <li>
                                    LONGITUD: -77.935093
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div>
                            <div className="card-body">
                                <h5 className="card-title">Recomendaciones</h5>
                                <p className="card-text">SE RECOMIENDA VALIDAR DICHA ZONA ILEGAL PARA SU PRONTA MITIGACION Y CONTROL DE DICHA ACTIVIDAD</p>
                            </div>

                        </div>
                        
                        <div>
                            <div className="card-body">
                                <h5 className="card-title">Beneficios</h5>
                                <p>SE ESPERA UNA REDUCCION DE PRODUCCION DE COCA ORIENTADA AL NARCOTRAFICO  DE UN 5% ADEMAS DE UNA RECUEPERACION DE AREA FORESTAL DE UN 30 % EN DICHO SECTOR</p>
                            </div>
                        
                        </div>
                        <div className="card-body bg-warning">
                            <ReactECharts option={option2}/>
                        </div>
                        
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-white bg-primary mb-3" >
                       
                       <div className="card-header ">DEFORESTACION ILEGAL</div>
                           <div className="bg-secondary">
                           <div className="card-body bg-success">
                               <h5 className="card-title">Detalles</h5>
                               <ul>
                                    <li>
                                    SE DETECTO UNA ZONA CON PRESENCIA DE ACTIVADAD DEFORASTIVA, CON CARACTERISTICAS DEPREDATIVAS.
                                    </li>
                                    <li>
                                    ZONA1: LATITUD: -6.132782
                                    </li>

                                    <li>
                                    LONGITUD: -77.600631

                                    </li>
                                </ul>
                           </div>
                       </div>
                       
                       <div>
                           <div className="card-body">
                               <h5 className="card-title">Recomendaciones</h5>
                               <p className="card-text">SE RECOMIENDA VALIDAR DICHA ACTIVIDAD CON LAS AUTORIDADES RESPECTIVAS PARA SU RESPECTIVAS MEDIDAS JUDICIALES</p>

                           </div>

                       </div>
                       
                       <div>
                           <div className="card-body">
                               <h5 className="card-title">Beneficios</h5>
                               <p>SE ESTIMA UNA RECUPERACION DE AREA FORESTADA DE 6 HECTARIAS EN 6 AÑOS DE ESTA MANERA RECUPERANDO UN 30% DE BIODIVERSIDAD EN DICHA ZONA. </p>
                           </div>
                       
                       </div>
                       <div className="card-body bg-warning">
                            <ReactECharts option={option2}/>
                        </div>
                       
                   </div>
                </div>
                <div className="col-3">
                    <div className="card text-white bg-primary mb-3" >
                       
                       <div className="card-header ">DESBORDAMIENTO DEL RIO</div>
                           <div className="bg-secondary">
                           <div className="card-body bg-success">
                               <h5 className="card-title">Detalles</h5>
                               <ul>
                                    <li>
                                    SE DETECTO ZONAS CON ELEVADO NIVEL DE AGUA, CON POSIBLE DESVORDAMIENTO DEL RIO

                                    </li>
                                    <li>
                                    ZONA1: LATITUD: -5.652896
                                    </li>

                                    <li>
                                    LONGITUD: -77.461538
                                    </li>
                                </ul>
                           </div>
                       </div>
                       
                       <div>
                           <div className="card-body">
                               <h5 className="card-title">Recomendaciones</h5>
                               <p className="card-text">SE RECOMIENDA VISITAR DICHA ZONA PARA SU PREVENCION DE RIEGO DE VIDAS HUMANAS Y A SUS RESPECTIVOS INMUEBLES</p>
                           </div>

                       </div>
                       
                       <div>
                           <div className="card-body">
                               <h5 className="card-title">Beneficios</h5>
                               <p>SE ESPERA PREVENIR UN RIESGO DE VIDAS</p>
                           </div>
                       
                       </div>
                       <div className="card-body bg-warning">
                            <ReactECharts option={option2}/>
                        </div>
                       
                   </div>
                </div>
               
            
            
                <h1 className="text-center">IMAGENES</h1>
                <div className="box col-3">
                    <img src="../images/mapa.jpeg" alt="img1"/>
                    <span>Moyobamba</span>
                </div>
                <div className="box col-3">
                    <img src="../images/mapa2.jpeg" alt="img2"/>
                    <span>Yurimagua</span>
                </div>
                <div className="box col-3">
                    <img src="../images/mapa4.jpeg" alt="img3"/>
                    <span>Yurimaguas</span>
                </div>
                <div className="box col-3">
                    <img src="../images/mapa3.jpeg" alt="img4"/>
                    <span>Yurimaguas</span>
                </div>
            </div>
            
           

        </div>

    );
}
