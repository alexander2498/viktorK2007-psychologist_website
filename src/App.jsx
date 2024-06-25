import './App.css';
import ButtonSign from './buttons/buttonSign';
import Logoo from './buttons/pictures/logo';
import Title from './title/title';
import TextTitle from './title/textTitle';
import SabTextTextTitle from './title/sabTextTitle';
import TextSadLine from './second_screen/TextSadLine';
import SubtextSadLine from './second_screen/SubtextSadLine';
import TextImage3 from './second_screen/textImage3';
import AboutYou from './third_screen/aboutYou';
import YourRequests from './third_screen/yourRequests';
import IfYou from './third_screen/ifYou';
import AboutText from './third_screen/aboutText';
import Choice1 from './third_screen/choice1';
import Choice2 from './third_screen/choice2';
import TheMethod from './fourth_screen/theMethod';
import Gipnoz from './fourth_screen/gipnoz';
import SvgBoshka from './svg/svgBoshka';
import Cist from './svg/Cist';
import SvgMesseng from './svg/svgMesseng';
import CrivayaLine from './svg/svgCrivayaLine';
import Wefy from './fifth_screen/Wefy';
import WefySText from './fifth_screen/WefySext';
import Girl from './svg/girl';
import GirlText from './fifth_screen/girlText';
import Price from './fifth_screen/price';
import List1 from './svg/list1';
import List2 from './svg/list2';
import Education from './fifth_screen/education';
import TextEducation from './fifth_screen/textEducation';
import PriceBlock from './fifth_screen/priceBlock';
import Forma2 from './forma/forma2'
import MenuTitle from './title/menuTitle';
import EndScreen from './forma/End_screen';
import Gipnoz2 from './fourth_screen/Gipnoz2';
import Gipnoz3 from './fourth_screen/Gipnoz3';
import GirlText2 from './svg/GirlText2';



function App() {
  return (
    <div>
      <div className='background' >
        <MenuTitle />
        <div className='box_logo'>
          <Logoo />
        </div>
        <Title />

        <a href='#forma'>
          <ButtonSign border={'3px solid white'} backgroundColor='rgb(255, 255, 255, 0.4)' sign="Записаться" />
        </a>

      </div>
      <a id='about_me'></a>
      <TextTitle />
      <div className='grup_text_title'>
        <div className='image_3' ></div>
        <SabTextTextTitle />
      </div>

      <div className='sad_line_flex'>

        <div className='sad_line'></div>
        <div className='box'>
          <TextSadLine />
          <SubtextSadLine />

        </div>
      </div >


      <div className='text_image3_flex' >

          <div className='box1' ><TextImage3 /></div>
          <div className='Box233' >
            <div className='image_3_background' ></div>
            <div className='image_4' ></div>
          </div>

      </div>  
      <div className='image3_line' ></div>
      <div className='class_image_5' ></div>
      <a id='about_you'></a>
      <div className='box_you' >
        <AboutYou />
        <YourRequests />
        <IfYou />
      </div>


      
      <div className='about_flex' >
        <div>
          <AboutText text={"— в поиске спокойствия, самоуважения и принятия себя"} />
          <AboutText text={"— ищите пути познания себя, других, ваших близких"} />
          <AboutText text={"— желаете изменить свою жизнь"} />
          <AboutText text={"— распрощаться с вредными привычками"} />
        </div>
        <div>
          <AboutText text={"— «проработать» свои страхи, желания, негативные эмоции"} />
          <AboutText text={"— реализовать новый проект, начать новый этап"} />
          <AboutText text={"— или просто чувствуете стремление к переменам и внутреннему росту"} />
        </div>
      </div>
      

      <Choice1 />
      <Choice2 />
      <div className='line_choice' ></div>

      <div className='The_method_flex' >
        <a id='methods' >
          <TheMethod />
        </a>
        <div className='method_line' ></div>
      </div>
      <div>
        <div className='boxBoshka' >
          <Gipnoz  />

          <SvgBoshka />
        </div>
        <div className='boxBoshka' >
          <Cist />
          <Gipnoz2  />

        </div>
        <div className='boxBoshka' >
          <Gipnoz3  />
          <SvgMesseng />
        </div>
      </div>





      <a id='seans' />
      <CrivayaLine />
      <div className='box_relaative' >
        <Wefy />
        <WefySText />
      </div>

      <div className='girl_text_flex' >
        <Girl />
        <GirlText />
      </div>
      <GirlText2 />
      <Price />
      <div className='V_line' ></div>
      <PriceBlock />


      <div className='list_grip' >
        <List1 />
        <List2 />
      </div>
      <a id='education' >
        <Education />
      </a>
      <div className='educationGrup' >
        <TextEducation />


      </div>
      <div className='EndContainer'>
        <a id='forma'>
          <Forma2 />
        </a>


        <EndScreen />

      </div>
    </div>
  );
}





export default App;