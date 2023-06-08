import Loader from './loader';

export class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '31ac92623dd342d09132f363af52f8d8',
        });
    }
}
