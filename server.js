import bodyParser from 'body-parser';
import express from 'express';
import handlebars from 'express-handlebars';

const app = express();
const hbs = handlebars.create({
	defaultLayout: 'main',
	extname: '.hbs',
	helpers: {
		translit(text) {
			const transliterationMap = {
				А: 'A',
				Б: 'B',
				В: 'V',
				Г: 'G',
				Д: 'D',
				Е: 'E',
				Ё: 'E',
				Ж: 'Zh',
				З: 'Z',
				И: 'I',
				Й: 'Y',
				К: 'K',
				Л: 'L',
				М: 'M',
				Н: 'N',
				О: 'O',
				П: 'P',
				Р: 'R',
				С: 'S',
				Т: 'T',
				У: 'U',
				Ф: 'F',
				Х: 'Kh',
				Ц: 'Ts',
				Ч: 'Ch',
				Ш: 'Sh',
				Щ: 'Shch',
				Ъ: '',
				Ы: 'Y',
				Ь: '',
				Э: 'E',
				Ю: 'Yu',
				Я: 'Ya',
				а: 'a',
				б: 'b',
				в: 'v',
				г: 'g',
				д: 'd',
				е: 'e',
				ё: 'e',
				ж: 'zh',
				з: 'z',
				и: 'i',
				й: 'y',
				к: 'k',
				л: 'l',
				м: 'm',
				н: 'n',
				о: 'o',
				п: 'p',
				р: 'r',
				с: 's',
				т: 't',
				у: 'u',
				ф: 'f',
				х: 'kh',
				ц: 'ts',
				ч: 'ch',
				ш: 'sh',
				щ: 'shch',
				ъ: '',
				ы: 'y',
				ь: '',
				э: 'e',
				ю: 'yu',
				я: 'ya',
			};

			return text
				.split('')
				.map((char) => transliterationMap[char] || char)
				.join('');
		},
	},
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	res.render('form');
});

app.post('/', (req, res) => {
	res.render('form', { body: req.body });
});

app.post('/target', (req, res) => {
	res.render('target', { query: req.body });
});

app.listen(3000, () => console.log('Server works'));
