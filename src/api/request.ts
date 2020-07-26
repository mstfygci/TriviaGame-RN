import {CategoryModel} from '../models/category.model';
import {QuestionModel} from '../models/question.model';
import {Html5Entities} from 'html-entities';

export function getCategoryApi(): Promise<CategoryModel[]> {
    const url = 'https://opentdb.com/api_category.php';
    return request(url)
        .then(response => response['trivia_categories'] || []);
}

export function getQuestionApi(category?: CategoryModel, difficulty?: string): Promise<QuestionModel[]> {
    const url = 'https://opentdb.com/api.php?amount=10';
    const options = {
        queryParams: {
            category: category ? category.id : '',
            difficulty: difficulty ? difficulty.toLowerCase() : '',
            type: 'multiple',
        },
    };

    return request(url, options)
        .then(response => response['results'] || [])
        .then(response => (response as QuestionModel[]).map(questionModel => ({
            ...questionModel,
            question: Html5Entities.decode(questionModel.question),
            correct_answer: Html5Entities.decode(questionModel.correct_answer),
            incorrect_answers: questionModel.incorrect_answers.map(a => Html5Entities.decode(a)),
        })));
}

function makeQueryParams(params: any) {
    return Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
}

function request(url: string, options: any = {}) {
    options = Object.assign({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }, options);

    const {queryParams, ...rest} = options;
    if (queryParams) {
        url += (url.indexOf('?') === -1 ? '?' : '&') + makeQueryParams(queryParams);
    }

    return fetch(url, rest)
        .then(response => response.json());
}
