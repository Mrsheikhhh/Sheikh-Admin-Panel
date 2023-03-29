import React from "react"
import {SparklineComponent,Inject,SparklineTooltip} from "@syncfusion/ej2-react-charts"
const SparkLine=({id, height,width,data,color,type, currentColor})=>{
  return(
<SparklineComponent
id={id}
height={height}
width={width}
fill={color}
valueType="Numeric"
lineWidth={1}
borderColor={{color:currentColor,width:2}}
dataSource={data}
xName="x"
yName="yval"
type={type}

>  


<Inject services={[SparklineTooltip]} />
</SparklineComponent>


)
}
export default SparkLine