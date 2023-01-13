function App() {
  const textBold = "text-neutral-900 underline font-bold"
  return (
    <div className='min-h-full'>
      <div className="max-w-2xl mx-auto p-5">
        <div className='my-8'>
          <a href='https://github.com/oyeolamilekan' target={"_blank"} className={textBold}>Github</a> | <a href='https://www.linkedin.com/in/oye-johnson-4b9345111/' target={"_blank"} className={textBold}>Linkedin</a> | <a href='https://twitter.com/tallestwidget' target={"_blank"} className={textBold}>Twitter</a>
        </div>
        <p className='my-3'>Hello.</p>
        <p className='my-3'>Hi i am <span className='font-bold'>Oye Olalekan Johnson</span>, a Software Developer currently living in Kwara, Nigeria.</p>
        <p className='my-3'>I've building software since 2019, working with big companies like <a href='https://quidax.com/' className={textBold} target={"_blank"}>Quidax</a>, <a className='text-neutral-900 underline font-bold' target={"_blank"} href="https://basqet.com/">Basqet</a>, and startups and small companies like <a href='https://stemuli.net/' className='text-neutral-900 underline font-bold' target={"_blank"}>Stemuli</a>, <a href='http://fluidangle.com/' className='text-neutral-900 underline font-bold' target={"_blank"}>Fluidangle</a>, <a href='https://nativebrands.co/' className='text-neutral-900 underline font-bold' target={"_blank"}>NativeBrands</a> and Diamond Acres Software.</p>
        <p className='my-3'>I also love building exprimental product like <a href='https://twitter.com/tallestwidget/status/1489383733119655936' className={textBold} target={"_blank"}>Instagram Scraper</a>, <a href='https://twitter.com/tallestwidget/status/1564390321131294723' className={textBold} target={"_blank"}>DCA Monitor</a>, <a href='https://twitter.com/tallestwidget/status/1514879915811872771' className={textBold} target={"_blank"}>Crypto POS</a>, <a href='https://twitter.com/tallestwidget/status/1576952488346865665?s=20&t=bae7Sp1FLulPopHaf96s1g' className={textBold} target={"_blank"}>Crypto to Giftcard</a>, <a href='https://twitter.com/i_josif/status/1529071653459828736' className={textBold} target={"_blank"}>Airtme to Crypto</a>, Offramp Crypto, <a href='mailto:johnsonoye34@gmail.com' className={textBold}>Inter Fintech Switch (send direct request for demo video).</a></p>
        <p className='my-3'>I also build libraries like <a href='https://github.com/oyeolamilekan/basqet-python' className={textBold} target={"_blank"}>Quidax Python</a>, <a href="https://github.com/oyeolamilekan/quidax-node" className={textBold} target={"_blank"}>Quidax Node</a>, <a href="https://github.com/oyeolamilekan/basqet-python" className={textBold} target={"_blank"}>Basqet Python</a>, <a href="https://github.com/oyeolamilekan/basqet_flutter" className={textBold} target={"_blank"}>Basqet Flutter</a>, <a href="https://github.com/oyeolamilekan/basqet-react" className={textBold} target={"_blank"}>Basqet React</a>, <a href="https://github.com/oyeolamilekan/basqet-node" className={textBold} target={"_blank"}>Basqet Node</a>, and <a href="https://pub.dev/packages/fincra_flutter" className={textBold} target={"_blank"}>Fincra Flutter</a>.</p>
        <h3 className='my-3'><b>Skills</b></h3>
        <ul className='list-disc list-inside'>
          <li>HTML/CSS</li>
          <li>JavaScript / TypeScript</li>
          <li>TailwindCSS / SCSS</li>
          <li>Unit</li>
          <li>Node</li>
          <li>MongoDB</li>
          <li>Express</li>
          <li>Ruby</li>
          <li>Ruby on rails</li>
          <li>Heroku / Railway / AWS.</li>
        </ul>
        <h3 className='my-3'><b>Contact</b></h3>
        <p className='my-3'>Shoot me an email at <a href="mailto:johnsonoye34@gmail.com" className={textBold}>johnsonoye34@gmail.com</a></p>
      </div>
    </div>
  )
}

export default App
