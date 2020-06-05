import React, { useState } from 'react';
import Style from './style.module.css'

const Search = () => {
    const [dropdownValue, setDropdownValue] = useState('en');
    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState('');


    const buttonPressed = () => {
        console.log(searchValue, dropdownValue);
        if (searchValue == '') {
            alert("Please enter a search parameter");
        }
        fetch(`https://gnews.io/api/v3/search?q=${searchValue}&lang=${dropdownValue}&token=ec280f1563e12b361b37c0e32fc6d7e4`)
            .then(res => res.json())
            .then(fetchedData => {
                setData(fetchedData.articles);
                console.log(data);
                setSearchValue('');
            })
    }

    const post = () => {
        if (data == '') {
            return (<div>
            </div>)
        } else {
            return (
                <div className={Style.render}>
                    {console.log(data)}

                    {data.map(result => {
                        return (
                            <div className={Style.innerPost}>
                                <a key={result.title} href={result.url} >
                                    <div className={Style.image}>
                                        <img  src={result.image} alt={result.title}></img>
                                    </div>
                                    
                                </a>
                                <div><h3>{result.title}</h3></div>
                                <div className={Style.description}>{result.description}<a key={result.title} href={result.url} >Read More</a></div>


                            </div>
                        )
                    })

                    }
                </div>
            )
        }
    }




    return (
        <div>
            <div className={Style.container}>
                <input className={Style.input} placeholder='Search..' type='search' value={searchValue} onChange={e => setSearchValue(e.target.value)}></input>
                <select className={Style.select} value={dropdownValue} onChange={(e) => { setDropdownValue(e.target.value) }} >
                    <option value='af'>Afrikaans</option>
                    <option value='sq'>Albanian</option>
                    <option value='sm'>Amharic</option>
                    <option value='az'>Azerbaijani</option>
                    <option value='eu'>Basque</option>
                    <option value='be'>Belarusian</option>
                    <option value='bn'>Bengali</option>
                    <option value='bh'>Bihari</option>
                    <option value='bs'>Bosnian</option>
                    <option value='bg'>Bulgarian</option>
                    <option value='ca'>Catalan</option>
                    <option value='hr'>Croatian</option>
                    <option value='cs'>Czech</option>
                    <option value='da'>Danish</option>
                    <option value='nl'>Dutch</option>
                    <option value='en'>English</option>
                    <option value='eo'>Esperanto</option>
                    <option value='et'>Estonian</option>
                    <option value='fo'>Faroese</option>
                    <option value='fi'>Finnish</option>
                    <option value='fr'>French</option>
                    <option value='fy'>Frisian</option>
                    <option value='gl'>Galician</option>
                    <option value='ka'>Georgian</option>
                    <option value='de'>German</option>
                    <option value='el'>Greek</option>
                    <option value='gu'>Gujarati</option>
                    <option value='iw'>Hebrew</option>
                    <option value='hi'>Hindi</option>
                    <option value='hu'>Hungarian</option>
                    <option value='is'>Icelandic</option>
                    <option value='id'>Indonesian</option>
                    <option value='ia'>Interlingua</option>
                    <option value='ga'>Irish</option>
                    <option value='it'>Italian</option>
                    <option value='ja'>Japanese</option>
                    <option value='jw'>Javanese</option>
                    <option value='kn'>Kannada</option>
                    <option value='ko'>Korean</option>
                    <option value='la'>Latin</option>
                    <option value='lv'>Latvian</option>
                    <option value='lt'>Lithuanian</option>
                    <option value='mk'>Macedonian</option>
                    <option value='ms'>Malay</option>
                    <option value='ml'>Malayam</option>
                    <option value='mt'>Maltese</option>
                    <option value='mr'>Marathi</option>
                    <option value='ne'>Nepali</option>
                    <option value='no'>Norwegian</option>
                    <option value='oc'>Occitan</option>
                    <option value='fa'>Persian</option>
                    <option value='pl'>Polish</option>
                    <option value='pa'>Punjabi</option>
                    <option value='ro'>Romanian</option>
                    <option value='ru'>Russian</option>
                    <option value='gd'>Scots Gaelic</option>
                    <option value='sr'>Serbian</option>
                    <option value='si'>Sinhalese</option>
                    <option value='sk'>Slovak</option>
                    <option value='sl'>Slovenian</option>
                    <option value='es'>Spanish</option>
                    <option value='su'>Sudanese</option>
                    <option value='sw'>Swahili</option>
                    <option value='sv'>Swedish</option>
                    <option value='tl'>Tagalog</option>
                    <option value='ta'>Tamil</option>
                    <option value='te'>Telugu</option>
                    <option value='th'>Thai</option>
                    <option value='ti'>Tigrinya</option>
                    <option value='tr'>Turkish</option>
                    <option value='uk'>Ukrainian</option>
                    <option value='ur'>Urdu</option>
                    <option value='uz'>Uzbek</option>
                    <option value='vi'>Vietnamese</option>
                    <option value='cy'>Welsh</option>
                    <option value='xh'>Xhosa</option>
                    <option value='zu'>Zulu</option>



                </select>
                <button className={Style.button} onClick={buttonPressed}>Search</button>
            </div>
            <div className={Style.normal} id="data">
                {post()}
            </div>
        </div>
    )
}

export default Search;

