# Market Exporter
Плагин для экспорта товарных предложений из WooCommerce в WordPress.

## Описание

Если Вы используете WooCommerce и хотите экспортировать все Ваши товары в Яндекс Маркет, то этот плагин однозначно для Вас! Market Exporter предоставляет возможность создавать файлы YML для экспорта товаров в Яндекс Маркет.

Плагин находится в активной разработке, которая поддерживает только упрощенный тип описания для экспортированного списка товарных предложений (т.е. выгружаются следующие поля: название, описание, цена, категория и изображение). Большой упор сделан на соответствие требованием Яндекс Маркет. Поддерживаются четыре валюты: рубль, гривна, доллар и евро.

Я собираю отзывы и предложения о том какой функционал Вы хотите видеть в плагине.

## Установка плагина

1. Загрузите 'Market Exporter' в папку с плагинами на Вашем сайте WordPress (`/wp-content/plugins/`).
2. Активируйте 'Market Exporter' через раздел 'Плагины' в WordPress.
3. Выберите 'Market Exporter' в разделе 'Инструменты' в WordPress.
4. Нажмите кнопку 'Генерировать YML файл'.

## FAQ

**Какие типы валют поддерживаются плагином?**
Данные о ценах принимаются в рублях (RUR, RUB), гривнах (UAH), долларах (USD) и евро (EUR). На данный момент в WooCommerce не реализована поддержка белорусских рублей (BYR) и тенге (KZT), так что плагин их тоже не поддерживает. На Яндекс Маркете цены могут отображаться в рублях, гривнах, белорусских рублях и тенге в зависимости от региона пользователя.

В качестве основной валюты (для которой установлено rate="1") могут быть использованы только рубль (RUR, RUB) и гривна (UAH). Если в WooCommerce установлены доллары (USD) или евро (EUR), то используется курс Центрального Банка той страны, которая указана в настройках магазина на Яндекс Маркет. Применяется курс, установленный на текущий день. Курс обновляется ежедневно в 00.00.

**Как поменять настойки плагина?**
Настройки плагина можно осуществить на вкладке 'Товары' в менюю 'WooCommerce' - 'Настройки'.

В настоящий момент поддерживаются следующие настройки:
* Изменение названия магазина.
* Измнение названия компании.
* Изменение количества изображений при экспорте товарных предложений.

**Какие требования к WordPress, WooCommerce и оборудованию?**
Плагин был протестирован на последних версиях WordPress (включая версию 4.4), но, скорее всего, он будет работать и на более старых версиях.

WooCommerce также тестировался на последних версиях (включая версию 2.5).

Специфичных требований к версии PHP нет. Плагин тестировался на версиях PHP 5.5, 5.6 и 7.0.

## История версий

**0.0.6**
* Добавлена новая опция для указания количества изображений для экспорта.
* Оптимизация и чистка кода.
* Исправлена ошибка с экспортом изображений.

**0.0.5**
* Добавлена поддержка следующих валют: рубль, гривна, доллар, евро. Все должно работать как прописано в документации Яндекс Маркета. Т.е. можно цены задавать в любой из этих валют. Конвертация (при евро и долларе) будет по курсу ЦБ той страны, где зарегистрирован магазин, основной валютой при этом будет рубль.
* Выгружаются до 10 изображений товаров. По требованиям Яндекса длина URL изображения не должна превышать 512 символов. Изображение с длинной больше 512 символов выгружаться не будут. Сейчас реализована поддержка PNG и JPEG изображениям. GIF не реализовывал, т.к. вряд ли кто-то грузит такие изображения.
* Товары, которых нет в наличии, экспортироваться не будут.
* Вкладка с настройками плагина доступна тут: WooCommerce - Настройки - Товар.

**0.0.4**
* Корректно определяются виды доставки. Плагин проверяет доступность местной доставки, если она отключена, то берет данные из доставки по единой ставке.
* Появилось меню настроек (Настройки - Market Exporter). Сейчас там нужно указывать произвольные поля 'Короткое название магазина' и 'Полное наименование компании'. Данные поля необходимо заполнить. При первой активации плагин должен туда подставить данные из Настройки - Общие - Название сайта.
* Все текстовые поля проходят обязательную фильтрацию, при которой удаляются все HTML теги.
* Переработал код, чтобы он соответствовал рекомендациям от WordPress.
* Плагин теперь может удалять за собой "следы" из базы данных. На данный момент остается лишь папка wp-content/uploads/market-exporter/.

**0.0.3**
* Исправление багов.

**0.0.2**
* Если товара в WooCommerce спрятан, то он не будет экспортироваться в YML.
* Артикул товара выгружается в поле vendorCode в файле YML.
* Файл теперь сохраняется в папке wp-content/uploads/market-exporter/, а не в папках по умолчанию.
и небольшие оптимизации в коде.

**0.0.1**
* Первый выпуск.
