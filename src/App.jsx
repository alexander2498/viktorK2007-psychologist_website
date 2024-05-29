import './App.css';
import ButtonSign from './buttons/buttonSign';
import TopButton from './buttons/topButton';
import Logoo from './buttons/pictures/logo';
import Title from './title/title';
import Text_title from './title/text_title';
import Sab_text_text_title from './title/sab_text_title';
import Text_sad_line from './second_screen/Text_sad_line';
import Subtext_sad_line from './second_screen/Subtext_sad_line';
import Text_image_3 from './second_screen/text_image_3';
import About_you from './third_screen/about_you';
import Your_requests from './third_screen/your_requests';
import If_you from './third_screen/if_you';
import About_text from './third_screen/about_text';
import Choice_1 from './third_screen/choice_1';
import Choice_2 from './third_screen/choice_2';
import The_method from './fourth_screen/the_method';
import Gipnoz from './fourth_screen/gipnoz';
import Svg_boshka from './svg/svg_boshka';
import Cist from './svg/Cist';
import svg_messeng from './svg/svg_messeng';
import Svg_messeng from './svg/svg_messeng';
import Crivaya_line from './svg/svg_crivaya_line';
import Wefy from './fifth_screen/Wefy';
import Wefy_sText from './fifth_screen/Wefy_sText';
import Girl from './svg/girl';
import Girl_text from './fifth_screen/girl_text';
import Price from './fifth_screen/price';
import List_1 from './svg/list_1';
import List_2 from './svg/list_2';
import Education from './fifth_screen/education';
import Year_line from './svg/year_line';
import Text_education from './fifth_screen/text_education';
import PriceBlock from './fifth_screen/priceBlock';
import Forma from './forma/forma';
import Forma2 from './forma/forma2'


function App() {
  return (
    <div>
      <div className='background' style={styles.background} >
        <div className='flex' style={styles.flex}>

          <TopButton border={'none'} backgroundColor={'rgb(255, 255, 255, 0.4)'} sign="о методах" />
          <TopButton border={'none'} backgroundColor={'rgb(255, 255, 255, 0.4)'} sign="о сеансах" />
          <TopButton border={'none'} backgroundColor={'rgb(255, 255, 255, 0.4)'} sign="об образовании" />
          <TopButton border={'none'} backgroundColor={'rgb(255, 255, 255, 0.4)'} sign="как связаться" />
        </div>
        <div className='box_logo'>
          <Logoo />
        </div>
        <Title />
        <ButtonSign border={'3px solid white'} backgroundColor='rgb(255, 255, 255, 0.4)' sign="Записаться" />

      </div>
      <Text_title />
      <div className='grup_text_title'>
        <div className='image_3' ></div>
        <Sab_text_text_title />
      </div>

      <div className='sad_line_flex'>

        <div className='sad_line'></div>
        <div className='box'>
          <Text_sad_line />
          <Subtext_sad_line />

        </div>
      </div >


      <div className='text_image3_flex' >


        <div className='box1' ><Text_image_3 /></div>
        <div className='image_3_background' ></div>
        <div className='image_4' ></div>
      </div>
      <div className='image3_line' ></div>
      <div className='class_image_5' ></div>
      <div className='box_you' >
        <About_you />
        <Your_requests />
        <If_you />
      </div>
      <div className='about_flex' >
        <div>
          <About_text text={"— в поиске спокойствия, самоуважения и принятия себя"} />
          <About_text text={"— ищите пути познания себя, других, ваших близких"} />
          <About_text text={"— желаете изменить свою жизнь"} />
          <About_text text={"— распрощаться с вредными привычками"} />
        </div>
        <div>
          <About_text text={"— «проработать» свои страхи, желания, негативные эмоции"} />
          <About_text text={"— реализовать новый проект, начать новый этап"} />
          <About_text text={"— или просто чувствуете стремление к переменам и внутреннему росту"} />
        </div>
      </div>

      <Choice_1 />
      <Choice_2 />
      <div className='line_choice' ></div>

      <div className='The_method_flex' >
        <The_method />
        <div className='method_line' ></div>
      </div>

      <Gipnoz marginTop={"3vh"} marginLeft={"4vw"} boxShadow={"16px 13px 0px rgb(198, 191, 206)"} text={"Гипноз, и конкретно гуманистический гипноз, — это наиболее бережный метод коммуникации с самим собой, со своей бессознательной частью. Гуманистический гипноз создан Оливье Локером и Патрисией д’Анжели в конце 90-х прошлого века. Гипноз без манипуляций! Это метод, который приводит к изменениям благодаря самопомощи  клиента, а гипнотерапевт является только сопровождающим его или просто осветителем!"} />
      <Gipnoz marginTop={"48vh"} marginLeft={"17vw"} boxShadow={"16px 13px 0px rgb(226, 182, 182)"} text={`Эриксоновский коучинг может быть эффективным инструментом, если Вам необходимо планировать проект,приоритизировать задачи, найти решение или начать новый этап в Вашей жизни.\n\nМэрилин Аткинсон, основательница этого направления, считает, что изменить мир можно одной беседой!`} />
      <Gipnoz marginTop={"100vh"} marginLeft={"5vw"} boxShadow={"-16px 13px 0px rgb(192, 206, 191)"} text={"Арт-терапия - это работа с вашими чувствами через искусство и творческое начало человека.\n\nАрт-терапия способствует саморазвитию и самовыражению, внутренней гармонизации человека.В каждом из нас есть творческое начало, ведь, как говорят, человек — это Творец своей судьбы, а искусство — это универсальный целитель-переводчик языка чувств и эмоций! Попробуйте и разрешите себе творить, в первую очередь, для самоисследования, для проживания и принятия себя и своих чувств."} />

      <Svg_boshka />
      <Cist />
      <Svg_messeng />


      <Crivaya_line />
      <div className='box_relaative' >
        <Wefy />
        <Wefy_sText />
      </div>

      <div className='girl_text_flex' >
        <Girl />
        <Girl_text />
      </div>
      <Price />
      <div className='V_line' ></div>
      <PriceBlock />


      <div className='list_grip' >
        <List_1 />
        <List_2 />
      </div>
      <Education />
      <div className='educationGrup' >
        <Year_line />
        <Text_education />


      </div>

      {/* <Forma /> */}
      <Forma2 />
    </div>
  );
}

const styles = {
  background: {
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  flex: {
    display: "flex",
    marginRight: "2vw",
    justifyContent: "flex-end",
    paddingTop: "4vh",
    fontSize: "26px"
  },
}



export default App;