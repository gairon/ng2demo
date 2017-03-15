import { Injectable } from '@angular/core';
import { News } from '../model/news.model';
import { VideoShortDescr } from "../model/video-short-descr.model";

@Injectable()
export class VideoService {
  constructor() {
  }

  getNews() {
    return [
      new News(
        'Британские СС',
        'SS-GB',
        'http://cdn.seasonvar.ru/oblojka/small/15351.jpg',
        'http://seasonvar.ru/serial-15351-Britanskie_SS-0-season.html',
        null,
        '1-4 серия (Jaskier)'
      ),
      new News(
        'Охотники на троллей',
        'Trollhunters',
        'http://cdn.seasonvar.ru/oblojka/small/14926.jpg',
        'http://seasonvar.ru/serial-14926-Ohotniki_na_trollej.html',
        1,
        '21-23 серия'
      ),
      new News(
        'Закон Майло Мерфи',
        'Milo Murphy\'s Law',
        'http://cdn.seasonvar.ru/oblojka/small/15199.jpg',
        'http://seasonvar.ru/serial-15199-Zakon_Majlo_Mrfi.html',
        3,
        '4 серия'
      )
    ];
  }

  getVideoShortDescrList() {
    return [
      new VideoShortDescr(
        'Кремниевая долина',
        'Silicon Valley',
        'http://cdn.seasonvar.ru/oblojka/small/13537.jpg',
        'http://seasonvar.ru/serial-13537-Kremnievaya_dolina-0003-sezon.html',
        3,
        'Кто бы мог подумать, что современная молодежь настолько продвинута и перспективна. Перед нами история о группе гиков, которые изо всех...'
      ),
      new VideoShortDescr(
        'Мистер Робот',
        'Mr. Robot',
        'http://cdn.seasonvar.ru/oblojka/small/13775.jpg',
        'http://seasonvar.ru/serial-13775-Mister_Robot-2-season.html',
        2,
        'Второй сезон популярного американского сериала уже на ваших экранах. Проект "Мистер Робот", выстреливший в первом сезоне, рассказывал историю о простом...'
      ),
      new VideoShortDescr(
        'Компьютерщики',
        'The IT Crowd',
        'http://cdn.seasonvar.ru/oblojka/small/1189.jpg',
        'http://seasonvar.ru/serial-1189-Komp_yutershiki-4-season.html',
        4,
        'Рой и Мосс компьютерные гении. Они работают на одну компьютерную организацию в отделе IT. Полностью погруженные в работу, они...'
      )
    ];
  }
}
