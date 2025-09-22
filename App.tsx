
import React from 'react';
import { Woman } from './types';
import WomanCard from './components/WomanCard';

const womenData: Woman[] = [
  {
    id: 1,
    name: 'خديجة بنت خويلد',
    description: 'أولى زوجات النبي محمد وأول من آمن به. كانت تاجرة ثرية وذات حكمة، وساندت النبي في بداية دعوته.',
    imageUrl: 'https://picsum.photos/seed/khadija/400/300',
  },
  {
    id: 2,
    name: 'عائشة بنت أبي بكر',
    description: 'ابنة أبي بكر الصديق وزوجة النبي. عُرفت بعلمها الغزير وروايتها للحديث، وكانت من أفقه نساء عصرها.',
    imageUrl: 'https://picsum.photos/seed/aisha/400/300',
  },
  {
    id: 3,
    name: 'فاطمة الزهراء',
    description: 'ابنة النبي محمد من خديجة وزوجة علي بن أبي طالب. لُقبت بـ "سيدة نساء أهل الجنة".',
    imageUrl: 'https://picsum.photos/seed/fatima/400/300',
  },
  {
    id: 4,
    name: 'سمية بنت خياط',
    description: 'من أوائل من دخلوا الإسلام، وتُعتبر أول شهيدة في الإسلام. تحملت العذاب الشديد وصبرت على دينها.',
    imageUrl: 'https://picsum.photos/seed/sumayyah/400/300',
  },
  {
    id: 5,
    name: 'نسيبة بنت كعب (أم عمارة)',
    description: 'صحابية جليلة اشتهرت بشجاعتها في الدفاع عن النبي يوم أُحد، حيث قاتلت دونه ببسالة.',
    imageUrl: 'https://picsum.photos/seed/nusaybah/400/300',
  },
  {
    id: 6,
    name: 'أسماء بنت أبي بكر',
    description: 'لُقبت بـ "ذات النطاقين" لدورها في هجرة النبي، حيث شقت نطاقها لتصنع به سفرة و قربة للنبي ووالدها.',
    imageUrl: 'https://picsum.photos/seed/asma/400/300',
  },
  {
    id: 7,
    name: 'رفيدة الأسلمية',
    description: 'تُعتبر أول ممرضة في الإسلام. كانت تداوي الجرحى في خيمة أقامتها في مسجد النبي بالمدينة.',
    imageUrl: 'https://picsum.photos/seed/rufayda/400/300',
  },
  {
    id: 8,
    name: 'الخنساء',
    description: 'شاعرة مخضرمة اشتهرت برثائها لأخويها صخر ومعاوية في الجاهلية، وأسلمت وحسن إسلامها.',
    imageUrl: 'https://picsum.photos/seed/khansa/400/300',
  },
   {
    id: 9,
    name: 'أم سلمة',
    description: 'من زوجات النبي، وعُرفت بحكمتها ورجاحة عقلها. كان لها دور مشهود في صلح الحديبية.',
    imageUrl: 'https://picsum.photos/seed/umm_salama/400/300',
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-100 text-gray-800">
      <header className="bg-teal-700 text-white shadow-md p-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">نساء خالدات من صدر الإسلام</h1>
          <p className="mt-2 text-lg text-teal-100">شخصيات نسائية عظيمة أثرن في تاريخ الأمة</p>
        </div>
      </header>
      
      <main className="container mx-auto p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {womenData.map((woman) => (
            <WomanCard key={woman.id} woman={woman} />
          ))}
        </div>
      </main>

      <footer className="text-center p-6 mt-8 bg-gray-200 text-gray-600">
        <p>تم إنشاؤه بكل تقدير واحترام لهؤلاء النساء العظيمات.</p>
      </footer>
    </div>
  );
};

export default App;
