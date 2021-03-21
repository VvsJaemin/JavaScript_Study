// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange']
    
    const result = fruits.join(',')
    console.log(result)
    
}

// Q2. make an array out of a string
{
    const fruits = '사과, 키위, 바나나, 채리'
    const result = fruits.split(',')
    console.log(result)
}

// Q3. make this array look like this : [5,4,3,2,1]
{
const array = [1,2,3,4,5]
const result = array.reverse()
console.log(result)
console.log(array)

}

// Q4. make new array without the first two elments
{
    const array = [1,2,3,4,5]
    const result =  array.slice(2,5)
    console.log(result)
    console.log(array)

    // splice  - 배열 자체를 수정
    // slice - 배열에서 원하는 부분만 return해서 받아오고 싶을 때 사용 

}

class Student { 
    constructor(name, age, enrolled, score){
        this.name = name
        this.age= age
        this.enrolled = enrolled
        this.score = score
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),

]

//Q5. find a student with the score 90
{
    const result = students.find((student)=>student.score===90)

    console.log(result)
}

// Q6. make an array of enrolled students

{
    const result = students.filter((student) => student.enrolled)

    console.log(result)
}

// Q7. make an array containing only the students' scores
// result should be : [45,80,90,66,88]

{
    const result = students.map((student)=>(student.score))

    console.log(result)
     // map :  배열안에 들어 있는 모든 요소들을 우리가 전달해준 콜벡 함수를 호출하면서 콜벡함수에서 가공되어진 리턴 되어진 값들로 대체 하는 것
}

// Q8. check if there is a student with the score lower than 50
{
    console.clear()
    const result = students.some((student) => student.score <50) // 배열 중에 어떤 것이라도 하나 만족되는 것이 있는 지 없는 검사할 때
    console.log(result)

    const result2 = !students.every((student) => student.score>=50) // 모든 배열의 조건이 만족 되야 될 때
    console.log(result2)
}

console.clear()
// Q9. compute students' average score

{
  const result = students.reduce((prev, curr)=> prev+curr.score, 0)

  console.log(result / students.length)
}

// reduce : 배열 하나하나 돌면서 무언가 값을 누적할 때 사용
// reduceRight : 배열 index 뒤에서부터 시작...

// Q10. make a string containing all the scores
// result should be : '45, 80, 90, 66, 88'
{
    const result = students.map(student => student.score)
    .filter(score => score>=50)
    .join()
    console.log(result)
}

// do Q10 sorted in ascending order
// result should be : '45, 66, 80, 88, 90'

{
    const result  =students.map((student) => (student.score))
    .sort((a,b)=> b-a)
    .join()
    console.log(result)

}