import images from "../image-data/images";

const solitArr = (arr, chunks) =>[
    ...Array(chunks),
].map((_, c) => arr.filter((n, index) => index % chunks === c) )
const questionsByAuthor = [];
const questionsByName = [];

images.forEach((item, index) => {
    if (index % 2 === 0) {
        questionsByAuthor.push({
            ...item,
        type: 'author',
    });
    }

    if (index % 2 !== 0) {
        questionsByName.push({
            ...item,
        type: 'author',
    });
    }
});

const uniqAnswersByAuthor = [... new Set(questionsByAuthor.map(item => item.author))];
const uniqAnswersByName = [... new Set(questionsByName.map(item => item.author))];

const newQuestionsByAuthor = solitArr(questionsByAuthor, 12);
const newQuestionsByName = solitArr(questionsByName, 12)

console.log('ByAuthor',newQuestionsByAuthor);
console.log(newQuestionsByName);

const answers = {
    uniqAnswersByAuthor,
    uniqAnswersByName,
}

export const questions = {
    questionsByAuthor: newQuestionsByAuthor,
    questionsByName: newQuestionsByName,

}
console.log(questions);
//----------------------------------------------------------------------

const reqSvgs = require.context ( '../image-data/img', true, /\.jpg$/ );

const svgs = reqSvgs
  .keys ()
  .reduce ( ( images, path ) => {
    images[path] = reqSvgs ( path )
    return images
  }, {} )

 export let linkJPG = Object.values(svgs);

 export default {questions, linkJPG};
