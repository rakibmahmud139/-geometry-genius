// triangleAreaTotal

document.getElementById('btn-triangle').addEventListener('click', function () {
    const triangleBField = document.getElementById('triangle-b');
    const triangleBFieldString = triangleBField.value;
    const triangleB = parseFloat(triangleBFieldString);

    triangleBField.value = '';

    const triangleHField = document.getElementById('triangle-h');
    const triangleHFieldString = triangleHField.value;
    const triangleH = parseFloat(triangleHFieldString);

    triangleHField.value = '';

    const triAngleTotal = 0.5 * triangleB * triangleH;
    const triangleAreaTotal = triAngleTotal.toFixed(2);

    const areaTotal = document.getElementById('area-total-triangle');
    areaTotal.innerText = triangleAreaTotal;
})

// rectAngleAreaTotal

document.getElementById('btn-rectangle').addEventListener('click', function () {
    const rectangleWField = document.getElementById('rectangle-w');
    const rectangleWFieldString = rectangleWField.value;
    const rectangleW = parseFloat(rectangleWFieldString);

    rectangleWField.value = '';

    const rectAngleLField = document.getElementById('rectangle-l');
    const rectAngleLFieldString = rectAngleLField.value;
    const rectAngleL = parseFloat(rectAngleLFieldString);

    rectAngleLField.value = '';

    const rectangleTotal = rectangleW * rectAngleL;
    const rectangleAreaTotal = rectangleTotal.toFixed(2);

    const areaTotal = document.getElementById('area-total-rectangle');
    areaTotal.innerText = rectangleAreaTotal;
})

// parallelogram

document.getElementById('btn-parallelogram').addEventListener('click', function () {
    const parallelogramField = document.getElementById('parallelogram-b');
    const parallelogramBFieldString = parallelogramField.value;
    const parallelogramB = parseFloat(parallelogramBFieldString);

    parallelogramField.value = '';

    const parallelogramHField = document.getElementById('parallelogram-h');
    const parallelogramHFieldString = parallelogramHField.value;
    const parallelogramH = parseFloat(parallelogramBFieldString);

    parallelogramHField.value = '';

    const parallelogramTotal = parallelogramB * parallelogramH;
    const parallelogramAreaTotal = parallelogramTotal.toFixed(2);


    const areaTotal = document.getElementById('area-total-parallelogram');
    areaTotal.innerText = parallelogramAreaTotal;
})

// Rhombus

document.getElementById('btn-rhombus').addEventListener('click', function () {
    const rhombusFieldD1 = document.getElementById('rhombus-d1');
    const rhombusFieldStringD1 = rhombusFieldD1.value;
    const rhombusD1 = parseFloat(rhombusFieldStringD1);

    rhombusFieldD1.value = '';

    const rhombusFieldD2 = document.getElementById('rhombus-d2');
    const rhombusFieldStringD2 = rhombusFieldD2.value;
    const rhombusD2 = parseFloat(rhombusFieldStringD2);

    rhombusFieldD2.value = '';

    const rhombusTotal = 0.5 * rhombusD1 * rhombusD2;
    const rhombusAreaTotal = rhombusTotal.toFixed(2);


    const areaTotal = document.getElementById('area-total-rhombus');
    areaTotal.innerText = rhombusAreaTotal;
})

// Pentagon

document.getElementById('btn-pentagon').addEventListener('click', function () {
    const pentagonPField = document.getElementById('pentagon-p');
    const pentagonPFieldString = pentagonPField.value;
    const pentagonP = parseFloat(pentagonPFieldString);

    pentagonPField.value = '';

    const pentagonBField = document.getElementById('pentagon-b');
    const pentagonBFieldString = pentagonBField.value;
    const pentagonB = parseFloat(pentagonBFieldString);

    pentagonBField.value = '';

    const pentagonTotal = 0.5 * pentagonP * pentagonB;
    const pentagonAreaTotal = pentagonTotal.toFixed(2);


    const areaTotal = document.getElementById('area-total-pentagon');
    areaTotal.innerText = pentagonAreaTotal;
})

// Ellipse

document.getElementById('btn-ellipse').addEventListener('click', function () {
    const ellipseAField = document.getElementById('ellipse-a');
    const ellipseAFieldString = ellipseAField.value;
    const ellipseA = parseFloat(ellipseAFieldString);

    ellipseAField.value = '';

    const ellipseBField = document.getElementById('ellipse-b');
    const ellipseBFieldString = ellipseBField.value;
    const ellipseB = parseFloat(ellipseBFieldString);

    ellipseBField.value = '';

    const ellipseTotal = 3.1416 * ellipseA * ellipseB;
    const ellipseAreaTotal = ellipseTotal.toFixed(2);

    const areaTotal = document.getElementById('area-total-ellipse');
    areaTotal.innerText = ellipseAreaTotal;
})


document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = "answer.html"
})