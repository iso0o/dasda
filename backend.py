from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route('/api/about-me', methods=['GET'])
def get_about_me():
    about_me_info = {
        'name': 'Бякин Игорь Максимович',
        'status': 'Студент группы ИСПК-301-51-00 в колледже ВятГУ',
        'skills': ['Python', 'C++', 'C#', 'qqq'],
        'qualities': ['Целеустремленность', 'Усидчивость', 'Коммуникабельность'],
        'future_goal': 'Не косячить в будущей работе'
    }

    # Сериализуем данные в формат JSON
    about_me_json = json.dumps(about_me_info, ensure_ascii=False)

    # Записываем данные в файл
    with open('about_me.json', 'w', encoding='utf-8') as file:
        file.write(about_me_json)

    return 'Информация сохранена в файл about_me.json'

if __name__ == '__main__':
    app.run(debug=True)
