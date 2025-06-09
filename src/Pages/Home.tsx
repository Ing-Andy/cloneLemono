import BlockOptions from '@/components/mine/BlockOptions'
import CarouselHeader from '@/components/mine/CarouselHeader'
import CarouselPartenaire from '@/components/mine/CarouselPartenaire'
import Footer from '@/components/mine/Footer'


export default function Home() {

    const dataOptions = [
        {
            titre: "enregistrement d'entreprise",
            smDescription: "les entreprises classes",
            description: "veiller enregistrer votre entreprise pour que les candidats et collaborateurs puissent savoir qui etes vous !!",
            lien: "entreprises"
        },
        {
            titre: "enregistrement des candidats",
            smDescription: "nul n'entre ici s'il n'est competant",
            description: "veiller enregistrer votre Cv et porfolio pour que les entreprises et collaborateurs puissent savoir qui vous etes !!",
            lien: "votre personne"
        },
        {
            titre: "enregistrement d'entreprise",
            smDescription: "vous preferer la distanse ?",
            description: "veiller enregistrer votre CV et portfolio de consultant pour que les entreprises et collaborateurs puissent savoir qui etes vous !!",
            lien: "votre porfolio"
        },
        {
            titre: "enregistrement d'Ecole",
            smDescription: "Nous evitons le chaumage a vos etudiants",
            description: "veiller enregistrer votre Ecole pour que les entreprises et collaborateurs puissent suivre vos etudiants et les contacter !!",
            lien: "Etablissement"
        },
    ]
  return (
    <div className="scrollbar-none px-4 py-0 m-0 w-full h-screen bg-[#ebebeb] dark:bg-[#111]">
        <CarouselHeader />
        <div className="flex flex-col mt-15">
            <h3 className='w-full text-black text-shadow-sm text-shadow-[#f5f5f5] dark:text-white text-5xl font-bold uppercase text-center'>Prennez partie en vous enregistrant</h3>
            <ul className='w-full flex justify-between relative mb-20 gap-2 mt-10'>
                {dataOptions.map((el,index) => (
                    <li key={index} className='w-1/4'><BlockOptions titre={el.titre} smDescription={el.smDescription} description={el.description} lien={el.lien} /></li>
                ))}
            </ul>
        </div>
        <h3 className='w-full text-black text-shadow-sm text-shadow-[#f5f5f5] dark:text-white text-5xl font-bold uppercase text-center'>Prennez partie en vous enregistrant</h3>
        <div className='w-full my-15 flex justify-center bg-white dark:bg-black  py-8 rounded-md shadow-md dark:shadow-zinc-900 shadow-[#dcdcdc] overflow-hidden'>
            <CarouselPartenaire/>
        </div>
        <footer className=''>
            <Footer />
        </footer>
    </div>
  )
}
