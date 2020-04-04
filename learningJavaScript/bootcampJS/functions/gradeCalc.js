
let gradeCalc = function(studentScore,totalQuestions)
{
    res = studentScore/totalQuestions*100;
    if(Math.trunc(res/10)==10 || Math.trunc(res/10)==9)
    {
        console.log('The student got an A (' + res + '%)');
    }
    else if(Math.trunc(res/10)==8)
    {
        console.log('The student got a B (' + res + '%)');
    }
    else if(Math.trunc(res/10)==7)
    {
        console.log('The student got a C (' + res + '%)')
    }
    else if(Math.trunc(res/10)==6)
    {
        console.log('The student got a D (' + res + '%)')
    }
    else
    {
        console.log('The student got an F (' + res + '%)')
    }
}

gradeCalc(15,20)