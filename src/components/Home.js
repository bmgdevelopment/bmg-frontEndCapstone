import React, { useContext, useEffect } from "react"
import { ItemProvider } from "./item/ItemProvider"
import { ItemSearch } from "./item/ItemSearch"
import { UserProvider } from "./user/UserProvider"
import { RegionProvider } from "./region/RegionProvider"
import { ItemList } from "./item/ItemList"
// import { Link } from "react-router-dom"
// import { ItemContext } from "./item/ItemProvider"
// import { Grid, Image, Card, Icon, Button } from 'semantic-ui-react'
// import { Card, Icon, Image } from 'semantic-ui-react'
import "./item/Item.css"

export const Home = () => {

    // const { items, getItems } = useContext(ItemContext)

    // useEffect(() => {
    //     getItems()
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return (
        <>
            <UserProvider>
                <RegionProvider>
                    <ItemProvider>
                        <ItemSearch />
                    </ItemProvider>
                </RegionProvider>
            </UserProvider>

            <div className="aside_and_mainFeed_home">

                {/* MAIN FEED TO KEEP */}
                <div className="mainFeedHome">
                    <br />
                    {
                        <div className="trendTravH2Div">
                            <h1 className="trendyTravlersH2 userItemsH2">Explore All Trends</h1>
                        </div>
                    }

                    {/* ALL ITEM LIST */}
                    <UserProvider>
                        <RegionProvider>
                            <ItemProvider>
                                <ItemList />
                            </ItemProvider>
                        </RegionProvider>
                    </UserProvider>

                </div>
                
            </div>
            <div className="backToTopDiv">
                <button className="backToTop">⬆</button>
            </div>
        </>
    )
}

/*

  <aside className="asidePanelHome">

                    <div className="asideAddNewDiv">
                        <Link to="/addNewItem">
                            <img className="addItemBanner" alt="Add item" src="http://dslv9ilpbe7p1.cloudfront.net/DsfNvC21hTskBXoyodN2Nw_store_banner_image.jpeg"></img>
                        </Link>
                    </div>

                    <div className="asideRegionsDiv">
                        <h4 className="h4RegionLink">ALL REGIONS</h4>
                        <div className="regionBannerLinks">
                            <img className="regionBanner" alt="Africa1" src="https://i.pinimg.com/originals/b1/39/93/b13993a6b2dc8fdaf66d5e9a12ab0c28.jpg"></img>
                            <img className="regionBanner" alt="Antartica2" src="http://wallpaperstock.net/mountains--lake-antarctica_wallpapers_48195_852x480.jpg"></img>
                            <img className="regionBanner" alt="Asia3" src="https://www.mayflowercruisesandtours.com/sites/default/files/2018-03/MainDesti-MayflowerTours-Header-Asia.jpg"></img>
                            <img className="regionBanner" alt="Australia4" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBgVFBUYGBgaGBsbGxsbGxsbGhoaGxoaGRoaGhgbIi0kGyApHhoYJTclKS8wNDQ0GiM5PzkxPi0yNDABCwsLEA8QHhISHjIpJCk2MjIyMjIwNTs1MjIyMjI1MjIyMjIyNjUyOzIyMjI1NjU1MjsyMjIyMjIyNjI1MjIyMv/AABEIAIABiQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACBAEDBQAGB//EAD0QAAIBAwIEBAMGBAUEAwEAAAECEQADIRIxBEFRYQUicYETMpFCUqGxwfAGFNHhI2JygvEVM6LSY5KTU//EABoBAAIDAQEAAAAAAAAAAAAAAAECAAMEBQb/xAAxEQACAgEDAwMCBAUFAAAAAAAAAQIRAxIhMQQTURRBYSKhcYGR8DKxwdHhBRUjUvH/2gAMAwEAAhEDEQA/ANImhJqo3RQm4KtSYXJFpaoLVV8QVBuUUhG0WTUFqqL0Ju06TEbRYWoS1Um9UG6KfSytyRaTQk1UbgqC9MkxW0GTQk0E0BemoRlpNRNUl6AuaNC7DJFA7RuaWa4aqLmiosWUooc1dxU0jqNCbhptLE1x90OgjqBUd5pD4hrjeNHQxe5H3Q6TQE5iaSN5qE3jTKDEeWPgfMRvmuZO4rO+KahrpPM0e2/IHmjXA8pHOgb8KRL1LOabQVvKqqhkuOtQWHUUpNczzR0idz4GkgnJiqGNVE1BNGgNpqqDLUM0M11EWgwY3qVYRJqk1GqgMi4uOVQX7VTNdNQYZUqeVE/EmIER6UtqqJpdKfI6m0qWxa90tvVlq72FLV00dKqhYyadllxhOKlXWMjNU100aBe9lmoUGqoqKIKC1VE1FdNQlEzXTQzXUA0EK6hmumoSj2xFQRXm28YuwNwDzgDlO8ZMU0952T4guYCqSA0HMT5RAmSMHv6Dkymo1bO8ouV0jZqDXnLnidwLJVtJAO6kwCDq2BGQR6Eep5PGm06pBcxIzpgAKcbaj82D6ztTOT9kBJPZuj0BFRFYD+LOgAHTBaCPskSQZwDvn35Rc464flgktJmREQBjG4JG20TkzU7nFIHbW/wb5FRFYieKuQZAEgwR15EeXIwf2CKBvFrg+Ye2CScZ9P6xmnUxXjrk3CtCVrBfxW5A0HAgSQJJzuOmO21Ut4xdk5HLGkY9t6sUiqUUj0dCRWBZ8ZuDBCtvvIP1mgfxi5nK/TapqFcT0BoSa87/ANSumBr94A99tvT8aFvEbh+1E9APz395o6yaD0RoCtYK8bcAMFszkrttJA7VzcfcGRc9iJGO/fPTYe0WQDxG4VoStYg8RuAf9wHH3fz2qD4lcOzA+i5+lN3EI8TNvTURWIniNwEgsOuRtvIH1ipXxG5BEg85iD9OY226nep3UTsN8GwRUEVnWuIdrbAkKwKkMxjykeUAHeYOe6+y9vxJ9JxM7NHy/uefSgs8QvpZbcbmwaEisdeOuQxlSARy55wB6A1a3GtoDEgHOB0EAzO2Ty6UzzRQi6ST8DxBoTSNri2Y/eyMAFdpmYJI36cqq/nImdU5EnI64gCDv13o+pj4YnoZ+UaRqKQW81xgiuANUj5snkDIEmJ6c6HjVdCupwQw1YmImJ0tBXP7xQ9Wrqh/9vdXY+7gZJA9cUBvLtqX61nM6kx5mbHSJmCIH5537VGsPjUMGBKnPLMAhd+Ril9U/A66CPk0P5lPvjeN6PWOo+orLe4k4UD1zJ6ArBiY/HelrtwEyAB9fTEkkfU1F1L90CXRRXDN2a6KwrWj7WrlsRtzGRvt9KK46Z0ahk5ZtRI5YCgA78+Y6TR9TvwJ6P5+xtE0OtfvD6isNPWCM757Qah7rE5nn167mTvR9R8E9J8m7rX7w+oqNa/eH1FYGpu9d8Q1PUfBPSfJ6GR1FcDWMSmkaXfVBkEKF9iGzzoBcY4Hm7AZ/DflRXUrwR9J8m7FRFYPxz0ol4jqPTP9qbvxF9K/JuRUVifzQ6fjRLxg6Ue+ielZs1FZNvioIyfxq88YOtMskX7ivBJD1dSB44dfwoW48ciancj5J2J+DRrqzP5+j/nR3+g/rQ7sfJPTzHdBgj4gBP2c8oMMDiNo9DjnT3AeI3EZV0jzsuZmZYz5gfN8xxJxvVvDcFauKkXUDEE6XRZEECCxMkxtjpnnWddm1c81sA6iiwpB1qwDAgZ1CduoiNxXLaTTs662kq2Nvxa2fi3o0jLGCSpjUSCAxAae05UdROJY4bVpJIjbJBz/AKTWlxPHM5ufIR85WArYLHkATiZ57VmcBMOzofvgQI2aInJEiMdM86SMnFU2WSjGTuio/PpYKNI0mMTmMwN8/QVbxK6SVWCQT5gQZGqJIjyCTz3mmeE4ZblsNqadRwF8oBnmTkzGPSofhRbu2yJ8zjBwdQzOIjzARnlvTOSvZ8ewsYbcc+4nauFyoZoGoj7RiTkiZ9fen+LIUwDIBNtWGqQFI5EAztXeIPEagQ1vThlghV22HkwZzJ/VR7jF/lbzOcNO0zuQuqAM4G3Lait5JrgWtKaGLvCssnlKiVbmfcgHO80D8O2lmMGInMHKamYmCSTn1zVt65pLWczqBGsaCRAGVkwcbTVa8VqtM7QpmDz+xoB6/wDNTVJ7rgs0wSr3ECyDGokYJHeO45UaXNUiWMxuZjJk9eZPvTqNZYANpkH8xn1kx+NZ/H8QhKhTAGkHALRzOw+nMzmrNVlNV4JtLGDnONM56HHXEdaYWwpIhyOUac4WTIG0kiMdT0prw7hLbKTOvziGHlOQDBwefIZE4OTVYtobfJXk5JgGJGmWwJ9s9KpeXdl0MT03sLIkhSoAnyyQQr8zDbCIgidx0xV1qw3w0YNMthQCCQpIaSRgyoEHfUaq4/xAsqw+QJgjOqclYUdBz69cqN4o+hkJEF9QmMfOT6yWme1NcmhHpT3H14MHLtCzqbTJyZlRE5Hmx/WpHDMVCrr0ltRlhBBkSBI80HaOvUVn/wA47lQowI8sAgmftSM786pW5pxMYI3IwRzwOwqU3yTVFPZD42JW22oZnQXE+WN5HMkz/amrqKbIcQm+owd5AMR0MjfYisqxx1y2AFuQMAjeIJnMbeZtuTVqcPfcAKQroCxhoghu+5JJkY5VGpcoaMo+5Q5BIVHRvMw20lQApkHnO3t71W2H8pBOCNZkiMw3LrjfPcVU1wq2sKolsKAVIKk4GARBA74FW/zsKwNs6tg/mkRpyRzmOfMCjT9twKa99g7fln/DYttjSARnkJDAkDPaavZFLTo+yNKkNDajyiIYHkec9IpDhuNdT8uqRABBbPYGd529OlGvGMAB8Mkj5ixO6ncbEZP1qaJeCLLBDHBpc1HTbZMDIBws6WJB32OQOUdJLiOFRW8ylWIYwQw1HUec5Ig7ch1NZ441gflYETBEyMkwCD+MnBrhxbsw163WflZ3GJzJncjBqaZ3ZO5Cq/mMWV0w1tiPPIBMYwMqeQIPPlUcTad3VH5KuVIIAMfNGwmevvVVriCin4coWPm0sxMAgrBGebDPQUTPbLSLcAqdyxKsZzmZ6++9SpJ3QNUGkr/EDjrYTaGU7EbRAIz6EfSl3v4ESCIE9gOoAzEfSmrd+6dK2wzRqOmCc8/KPmx+xVi8fcmLiswkllmBJwcRg4Hpypt+KF+l27oyi5iMwO5iT+W1BNa7cT5GQWgFJwBMiJiWg6tzv1NLrw0iZQdB55z/ALIx3NOk/BW69mJDbYfj/Wu5VpDw9Soi6gMZDKwz0BVWn1IFU8R4e6CdSNn7DBj9AMdaRPet/wBCe1iIb95oneZxE/h6dqs+E3Ifh+eKD4L/AHfyp9MvALj5AJqQScA/UwKsWy9OWbKR5hy6b9OZp445MWU4xQgVdskMe8E9AM/QVJGgA6iGMgr0jGTOPT+06CoqkFcEbEYI9DVrcQ5Gk3HImYJMT1iaLwSvlCrPGuGY4B6GiW2SCekT1zOY6Y/EVoEVGkU3Y+Qd5eDMNQK1NIqIqdj5B3vgzgp6H6GiCMeTfQ09URU7PyHu/Al8M9D6RUqCp+WeUETThFFbdl+ViPQkflQ7PyFZl7oSdifsgegj8qHSeh+hp2K7RU7HyDurwad5/wDEAyPNyJH2VgQO4ph9LOdWnU284JJ78t+1Z3DcK90z8gCAs3mYaVAXUekmNsear7fFyArMUggMunVsJEPzBIickd4APOWVXtv5OtLHaTe3gKzbQXT8QMFwsgqIDBuT75CncTB9QHx2BJGSyFMZIVYA8sbEGOu9E/GgWyuG0urgsG1mJlQQCAPUjlWVxXGHX5C6rMgcxty9RMU0blbaKpuKezNTw/imClDbkgS0tpDCcYPQAewoeJ4h2m4EUBQQBqJiPtYgHTpP1NZ3CeI6NWpS5OMmBHXAkHfM/wB7k49NJVrcgk7tkgzqGI3J35CN96anfAiarksdbjOouFRq8pPmAXZtI6bd/SnbpVld4/7eoSCYOq2eRH3ivTY7zWbd8TQkEIJBkdAdh688d6g8aGVxojWZaGAj0BFFakxZaXsPcQCLi/KSUAAIWJEFpG0QSMUVvgrlxECozLmYBABE69JMA+Ye9Zd/jSzKWzAgCW6RGZjAGBivR+GBWs2yYyXnaT5n6kTvyqSk0k2PiUW2kY9zhLgZiFKDUBDEAjAktOwk77V174aqCAS2gD7wLx82qcDUDjtypnxppuMArFV0yS5iMCCTjOBAM4NVX7aosqumWXaYy6iMnbflNHXaSB21bYC8WFICI6K2Wx9rERnaNW3UValxIPmdW8095mIPQjB78jmHPEULXl1FVAtAmRMA6fNpO8TtjHPFLqqvYIUwQ7qBpw8HAEZ5jO/KklKP7Q8LX/pT/IW2t6yfMxP2gxXsy4zE9K0VuWUZXuW3RS45SCA0NAMgHDR/akL7GVBKwSZny8s5zyO+8mqbrzbKtEazp0nBK/MxE7gtEnJBHKmbfHkVafwr97l3E2i8/CUqsDVkJrO+w33MDas7iF0nT5Xg7ySIgYA33n6U/wAPeQtbaFBYadsKcwdXX984qUshrjwVIVlOosEmVk4JzkUa32Fva2Y125viPb95pzhuLHw9BgyAPlyBPIiJ65MY96Uv3dSr5FBAAYqG3lo1SYkgE4xA7GKJYCRqAkAkTE5IE+x+hoJ3yB/BfxOpDjacGIPuKY4XjWX5ySCMCZINKLruQPmgACSMDlk00eAdQdQ5so+YEESJyPwNNGbi7QksakqZqW21KGEwc5/pXFKV4NvhjS0n5SJ5Tv7c/em7d4EYB/ea6OPJGSXk5eXFKDfgApUFKukdx7fvqKHHWriq2V6a4JTnC8E1wkKRgTJON45T+xWj4V4W63ZaDCkgg8zj12JqjJmhBO3wasPT5MjVLZ+4v/DVrVdY9EP1LKPymt3jvCUuDIhoww39D1FOeGcL/iOSBMDPM+p51r3eFxXnep/1D/muLrg9J03QJYdMt+T5dxllrblHWCPoR1B5irPCuFD3AGHlAJb02AkdyK9T494Z8RCQPOgJHcc1rH4FRbX/ADMAT+g9q7GHq1mx2ueP8nIy9E8OWnxz/gzfEuA+E8RKn5T+h70kPSvSXdNwaXODz+7/AJvbfvFefvJoZkYQykgjoQYI+taMWS/plyZuoxaXqjw/sBXRUa+xqC3arrM1M4iuio19q74lS0GmcRUfWu19qj4npUtBpk+xqPaoL1GqhYaYXtXe1DqqDcqWGmFPauntQaqnNCyUGpJwASe1N8RwhS2GIbWZlGUqVAODG+c0pbZlIZTBHMGD+FS164d3b6k1RlWWTWl0v5mjE8ST1K2BJ6RUSagWzgBmHozDeB+lO/8AT73X/wA1/rTOclzX6iVD5HfDuDz52cDSTCBB5pxup8sTI/4qj+VkENBO2VGM8jvVurv+JoSf3mkj0sE2/JJ9fklGMfH3F38NGkkGDPIYj3mlrvCmfm/8V/UVoGP2DVLjtTdmK+St9RKT22F04RYgkz1gflFQ3Ar1pgIelQwPagscfAXllXIp/JL1MUS8Go2J+tXEeldntTaI+Be7LyQ1iYl2MbSxMfWrFBAjUY9fT+lBJqZP7FHtRfsRZZr3IdnIZdWCZ2G8g9M/KN+g6Cq9DxBMiQc9RtjarM1wY0vZh4G7+TyHxFy67Bi5kLp2XaZIiKrVXC6Q2JYkQsHVvyotddrqdmHgnfyeSu5bZm1O05JjaJ6REe1PcNxZt23thVIZYkliR5g07w22xn8KV11E+tSWDG1TRFnyJ2mVPYBIP5Y/Kuaz3b6mKtPvUH3pu3HwL3ZeRV7TH7bfWpFto+Y422kb7HlvV5HrUR2odqPgfvT8lK2iM6j7mfzrmDffb0nH0qyKnTR7cfBO7LyVG0p+aSYjM0duF2FFpqNNMopcIRzcuWSbtDqqSKlVkgASSY70W65IlbpHpv4PtaviE9V9o1E/nXsPB+HDF2AwIAJ57mfTIrxf8P8AE/BVvi23ClwW2iADyEkgGP2M+94DxG21mUP/AHGkE4MaFOO+/wCxXlv9Tzycnpvet/Y9R0OJwxpNbr+ofhljVdeNoH4EzWnxNnSM0r4W4R/9p/MVZ4txqiT+/auFNynlpfBsepTr2MXjHgmvO2PCDcuMdWlNWIyT1A6R+m1aHGXS5jaeX6/vrTfhDBHKnbRqH+3B/MV38Llhg2uSjLGOWSUuDl8BtKuUJ7lm/IECvL/xBwtprhVGPxYWfMdIAEDVg50r1nIJma9L474+luyzqDrwqqR9o4BMYjnv25ivA8BZvktca27MZM6T5iczMVb0uTJq1zbX9jN1WPG4aYxRVxXBPbALRDSAQZB0xPfmOXXoaV009es3wjNdDgF5XUCACAFIWf8AKy7dBSJJ7V2+ny9yN/NHC6jD25afg7TXaaiT2qJPWr7KNwgtTooJPWpUMalhphaa6uvoyFlfBUkEHcEYIpRuJYcsdulJLLFcjxxSfAzQlKi2+oSKMxGSdU42iMz77fjT6k1YlNOgYqdRoRPWug1AhFjUZqINSFqAOiuroExii00CGnprvhnvV+mpZB1p6MeoXNo0OmmBaHWo+EKlB1FQIoWIq8gDlQmDtUoOooFEEowYqxXFFIjZRo7VxT0phhVbVKApFBWuC9KI1ZbNAcAWetd8MdKvY1WzDvUArA0fvFCUFWa6rY+lCxkmRAoWAqGJ7ULGhqGUSWHpQH2qCaiaXUOokz6VGrvUTUg9qmoOkkt6UJbrXNQtU1E0jnC8E1zlAIBBIwQSBM+kn2rRTwwW3cMQSpgARJgiCF3BkY5xBIFY/DuQYDMB2P6HH4U6OOcYLhuzAde2IjtXP6l5naTVHV6RdPGm07+TTtcRLFGGl8/7gPtL19OVELjpGmVAk7qQpIgkAyNhttWV/PAwCrCJgoZA6wJB6U0nHpBlhmRDiN4/0/nXOlidU0dZZk+GbXhfiVxZaVf7I+z15AmMkbDlS/HcVfuH4kkNnTpPlA6QSNWQZkH0pNXGY0wfugROMwAeVXXD/iaVJCl4BkmFJGTpLDHadudZuzGL1JV+Rd3L25Ou8ddDCAp2BfS8c/lUHp+NX8P4ixKfEIV9YUACBpdSDJJkT5sRynkJQuO0DT5iZOknON50wR7jMGuHEB9SkmFMQdmwDI5/TnNXfU63sppHoeHuIzDSVZY1SCCP8uR3z7VleKeMksbdmC8HzHaYmFH2j329ap4K0LduEYQXhkJJaIxBEaV7liamzwenPlLLkBQgdTjzalBjYmQfzymTMk3QY421uhDwnxFmsXbdzzl2VjqGpgUM6p1AoIJncRIpHintqQGQ+qkhT3BOoH2pviuHRnkl0YE5HzyT1OmOZqDwQcaQSRzwASRzIXE996uxZlB3dJ7tFGTp3PbSm1wzKuXUBgq6mdiAcHI6RuKsW2CJVgwx6iZwV3G2+3em38F05Ct9BXLce2IAMdDEfQgitsOu/wCsk/hmPJ0FfxRa/AUtiCCDsQa2/FLKm8g0ppJOqVTOTuWhhyys1mfzhZpa2pPpJPrETTd+7rPxLhQQSV1JdQpn7Lr5T64ps2XuU+Kv7gwYu0mnvdfYeu+H8OxyhBHQn9DnalbvgtgzDss+mPqJoEvu2QFcbyty23r5CFb8ate4w+ZHHf4bBd43DN1mqEpLh/c0twfK+wuvgkA6LynPNFNL3/AbhM60P+ry/gBFaHDcWoliy4wRJByYHzqvTlTL8Z0R2z9hQ8esEgf3ovJljt7CLFhe65POLwLINRKac7SCdIJPzdgT7UN5wsYEHMlxnJGwHUGtK4QQ4ZriSrfONWSCPUATIjoBWPxClwgXScHcopkO+dMyd9xWjHnnx/QzZenhzX3LFvoZGobTsY7ZIFVXeLA2yahvCrsSNOAPtdABzwKSvcO6mCPoQfyq555V/UzdiN7/AKFd1iWk7n9iu+I/3m+pr01jwW0QGIbIBieo7RV//QbX3fxP/tWXuGntkkmoLmjig012Tz6CBxUChCmuK1CFqvmfyoXiZH/FI8YW8uneTucbd/r7UHD3GYksIkDmD7wNpnaq9f1UXrF9OqzRkdKgGKX1+tSHNPZVpL3c0uzVzPVbNQchoxJ+JXfEqpjQa+4pHItUBwXx1oWfuKnhuAuXFLIhKjmP0G52o73COoK6TIJMwBjAjJ7T7mqZdRFOrNEOmk1dFOruK4j0pX4pq2w5YhQNRMwNzjJ/WjqFUAnHpQSOop3iuHFtFLyGY4GloCmYMgRmOtKNbPb2NBZExpY3EBjUQelQZ/eKjVTWLRP0rgKgZ6Uzw/CO/wAoETHqew50jklyOoN8E8SiALoJPlEziG5gQcjuaW1U1f4RpOmCBykTA64pFm/fX+tSM7QZQp8FgI71J/f7iqgfWj4i2VYqYkHkQw+oMH2ouQFEJKdtGs1Jp223f61nyQTNWGbQ9Z4dDuPcYP1FHftlR5CxzszTA7FgTNV2D1A9RTDEEbmsUotM3xnaEW491ADI4gzvI7QFgDOf6VNrjLTeU3CkkajAgb+aDnmcTRXV/YzSdxAdwD6j+tMsSfGwHncedzd4bxFgxFtkaZAlFERDEhowN/oegNaJ4i48FrbglcujuxB2EBiRHyiK8S3DrMjy+hj8NqvsNdU/4d0mdw3PM5I79qzZehXKr9+S/H1iXN/kz01u2hUh2ZmkYK+bOwDCBGB9aIcCoaJcGJx5sadU4PIbztB6V5/ifEOIA/xNQXPmkuueYM+SPTkKu8O4+4x+ZpMQxdCCBJ2ifaTvsKzT6WdN2jVj6uF0eqtJqWBLe2eWN/Wl7/hiEeZXA7rO/dRSXC+LMxUJrcZgxhZkYkRJ2mBua27/ABp1BVyJ8wTLawWOgQIYnSexrnSx5cctjod2E4/3POcV4bbUGD7NrH6VncO+i3GpUydnu2juTloK9Nq9dfzbPnVPKDvGSZJ1KNpzIGZ2rytltKQrxJIEXGtz7OGQ/ua6nRZpTi1L2ZyusxxjJOPgsMuPlZwQc6LN8bHdlIY1HABluKEVA/2VK3LUnkCrBkPoRRPabmhyMlrSvI3y9lgT12qi1egQrgY2W66dfsXx+tbt2tjHsnuM2rrFmAZzDRAu27gEQIKuAw7j9axkJJAce7pA3GTo22Ge1bNoHVL23cTzt23HaHt5iYrEtNpYAaRn7Je3meRb/imikLNsV4u8D5RogSPKrcyDz3yoq7+XAVJ0OGUtiG0yZ0sYkMOY5TS3F3Jbf7X/APQMPwFX8IfKP9Tfkp/WmlGlsVxk5P6g+EUB2CWyCAIKEzkcwzwd+lPhCFLO7HGzoMGQThQZxIx1pBLQNx5CRpB86FgYEQpXM9u3atLhbJCalCBVcSUuaAJkZDZ5HFTUq3YK3aootxLEG2NIj5GWGJgZxImdutB8b/5Lf/2uf+9XIGh419ocXPtfZnAxyNUabnS9/wDnao/mSvgetcQrbHrvg4jkfWqhabVOttMk6eWayVuAbT6iB+lP2+Kdl1BVgGCZONuUZx3rpPIvc5CwNfwGg0D7Q/KqyRiCD6cuxJxWc95ixiNgJ2j5pwT/AKa1uJsEW0YWwCw1RKszwXDOhXlIyhzJ9Ipn1SjJJ+5dDo1KLl7/AGKCqtHmyNo3H9KqtcOFyN4CnJO22/rVR4ppgKD0Jn8qA3XO7R6Y/v8AjVq03q9/wKmpVp4X4jJIJwRVD3VBgkj2I+mM0IBH7/M86MSRB2mc8vSi5sEccQdeee3METv19KBqJgZjcf8AJ296Amom2twuKT2IYjpQzUsKAjuKRsdI9J4BxF62mpbK3UBJ0KQrT8pnyzMGZUg+UUXiv8VoCBc4a4rhvMjXHWRzBJWciMilPBOJZcBgpzv6RWlx6l0DkqxXbdj6FeXt9a4eTGlmbkvwptcnYjJ6Eov23PJC+r+ZVZROxMx7gCaJLmkyCVPUYI96svrpY7R9PwqA5PMfTP412IL6aOZLaVnpfBfGrgcFrVq8IlldREEjzRhWIgeaCY1DqCfjPHvdRVe3aQKAEZBk8oIRFmRnJIEVjeGuVMgkQDzAzBGeXPc1dxrsADqP+5pLHGAhOFHWM/Ws+msholLVHcWbh2XkW9IJHsSKWDoTGx6bH6UwvEdRHtj+orncMMhT7fruK1amZNKBWwp2IB5A7e8cvevecJ4jwFy0tsPpIWDauK06oVYW6spEgwSO5ia8HaMbbdOR+tfRuG/gPheKspct67DFZddSuuraAHJK5HasPV02m7X78Gvpm0nX7/Mx+P8AAEQ/EtF9ZI0qGUq8tpABZlBO+DHShveD3XtKv8urRnTK/EUg5LWzJU7mZyGmo8f/AIEv8PbdxdS5bXJ+ZGAJgSpJB2+8KTTj+O4dALnDkoI81xDG0AE7TpgAnIA7CM6ctqaf2NSklyq+5Q/gIjNp1by435GZGokGYxHPtWdxfDST5XkAD5Y2EZmOdet4D+N7B8vEW7yd0K3F3k+W4IUdhO31xv4j/iSyzqvDs2gKFZyltXOkghhpGo+pYTBBEVbHNPVTTKnDG02mjzUfvnVgJ6/WJ+tQ9625m3qndpAAk/dYGW25gc6lB1/f1mtanqVmfTpdDNruQPefwq8HGD9DStq4o3x++0Y96YW6vU9sH9T+tVy5NEXsVsSec9aWar7rr0j3E/nVDHv9aaBVMHFWWjBqmO/0FWL+/wBzTyWwkXubdt4TzYnbrWPdsr8SV8oadQ+ycE6o5EbzTKXW06Zxy50pxWrMGDy23qmGLkullqmekJS3ZRnLBymo/Z1AMQFPX5lYkkYXmQIyeI8Vu6gCShTyAKNBQqciAAQZnfOTSlrxolVtvClcAkbjcLqnadgdpOabThkuam0onlkNLCDjTpznocHBOQYI50MCxtvIr3f5HUeXXGsbO4finuuqG4xJxJJbYGBuO2O9MfyV22sHVDeZdFzTqB28jhlnG0iu8IuWhcRX+7OtGCwwJMmQZxiBvI51rXrhaNRcowdLblTlgV0lMZEZxzbrJoZcrxTqK2rwTHBTjcnvxyZFq86A8gylW12owYB89kkA43gHFUWLpYQpLgDZbiXBtj/DugNW1xB4cKhRwzs4ViWUPpa1iFYDGs4aTsPWszi7ALKvxCoPmU3AVMTB1PB78+WeVGPUrxTZXLE17irrpYllVf8AXauW+X3rRINJKrFzp1NEnyuHwDGzDAkjynqK9N4f/DXEEEqhktpUpc0lyELmYYCQo3IzB5ikeI8NZHaXZCraWDKGlgR/lzmMzuKsXURfDE7Lf+DE8W4BrbTqLDVB8gUqRkgggEY5/wB6X4dtIg/fYfQJuOVetTg2Yf4oLqJkqCIJkTpzGWPsT1pS94LbK6g5DEnAdgczJ8+Bsue/apHqo1Unfygy6Z3cV+pjcPblmIDTA2YoCMz5tidvLHPenbSXIGpXUbgtbQh1BMgPEvtEmYxTY8Ba2TovAgIWOohgRJACnGcTjkdqr4O2EVwAstHyeUalOdWqZxqiIgjnOLI5oyX078FUscov6thMMpD/ACTA3V1xIIBjBzO3Wl9C9LX1b+tM6iS4BbE7XA5nppPy1V8J+t3/AOtn/wBqvRSz/9k="></img>
                            <img className="regionBanner" alt="Europe5" src="https://www.zapbooking.com/public/img/media_gallery/Europe-Banner-LKC_KAs2OE6k98.png"></img>
                            <img className="regionBanner" alt="NorthAmer6" src="https://www.traveller.com.au/content/dam/images/1/0/1/4/z/u/image.imgtype.TravellerIndexLeadHero.1720x430.png/1407308821173.jpg"></img>
                            <img className="regionBanner" alt="SouthAmer7" src="https://www.roundtheworldexperts.co.uk/sites/roundtheworldexperts.co.uk/files/styles/destination_slider/public/images/machu-picchu-sa-hero-shot.jpg?itok=-uuShVhC"></img>

                        </div>
                    </div>
                </aside>

                  <div className="organizeTilesDiv">
                        {
                            items.map(item => {
                                return (
                                    // <img className="itemTile" alt="item" src={item.itemImage}></img>
                                    <div className="container">
                                        <img key={`userItemSave--${item.id}`} className="itemTile" alt="item" src={item.itemImage} />
                                        {item.saved === true ? <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase' /></Button></div> : <div className="top-right"><Button icon><Icon circular inverted color='white' name='suitcase' /></Button></div>}
                                    </div>)
                            })
                        }
                    </div>


INLINE AVATAR AND USERNAME
import React from 'react'
import { Image } from 'semantic-ui-react'

const ImageExampleAvatar = () => (
  <div>
    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
    <span>Username</span>
  </div>
)

export default ImageExampleAvatar


 <div className="testDiv">
                <Grid columns={4}>

                    <Grid.Column>

                        <Card>
                            <Image
                                size="small"
                                src='https://i.pinimg.com/236x/fa/ea/60/faea607d339389fe65f7d5b032df21c8--hollister-jeans-hollister-fashion.jpg'
                                wrapped ui={false}
                                label={{ as: 'a', corner: 'left', icon: 'suitcase' }}
                            />
                            <Card.Content>
                                <Card.Header>Matthew</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Joined in 2015</span>
                                </Card.Meta>
                                <Card.Description>
                                    Matthew is a musician living in Nashville.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='user' />
                                    22 Friends
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <Card>
                            <Image
                                size="small"
                                src='https://i.pinimg.com/originals/b3/c5/0d/b3c50df5f869ffaa402a4236ee91ef16.jpg'
                                wrapped ui={false}
                                label={{ as: 'a', corner: 'left', size: 'large', icon: 'suitcase' }}
                            />
                            <Card.Content>
                                <Card.Header>Matthew</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Joined in 2015</span>
                                </Card.Meta>
                                <Card.Description>
                                    Matthew is a musician living in Nashville.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='user' />
                                    22 Friends
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>

                        <Card>
                            <Image
                                size="small"
                                src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
                                wrapped ui={false}
                                label={{ as: 'a', corner: 'left', size: 'large', icon: 'suitcase' }}
                            />
                            <Card.Content>
                                <Card.Header>Matthew</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Joined in 2015</span>
                                </Card.Meta>
                                <Card.Description>
                                    Matthew is a musician living in Nashville.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='user' />
                                    22 Friends
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>

                        <Card>
                            <Image
                                size="small"
                                src='https://i.pinimg.com/236x/fa/ea/60/faea607d339389fe65f7d5b032df21c8--hollister-jeans-hollister-fashion.jpg'
                                wrapped ui={false}
                                label={{ as: 'a', corner: 'left', size: 'large', icon: 'suitcase' }}
                            />
                            <Card.Content>
                                <Card.Header>Matthew</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Joined in 2015</span>
                                </Card.Meta>
                                <Card.Description>
                                    Matthew is a musician living in Nashville.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='user' />
                                    22 Friends
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <Card>
                            <Image
                                size="small"
                                src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
                                wrapped ui={false}
                                label={{ as: 'a', corner: 'left', size: 'large', icon: 'suitcase' }}
                            />
                            <Card.Content>
                                <Card.Header>Matthew</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Joined in 2015</span>
                                </Card.Meta>
                                <Card.Description>
                                    Matthew is a musician living in Nashville.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='user' />
                                    22 Friends
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <Card>
                            <Image
                                size="small"
                                src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
                                wrapped ui={false}
                                label={{ as: 'a', corner: 'left', size: 'large', icon: 'suitcase' }}
                            />
                            <Card.Content>
                                <Card.Header>Matthew</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Joined in 2015</span>
                                </Card.Meta>
                                <Card.Description>
                                    Matthew is a musician living in Nashville.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='user' />
                                    22 Friends
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid>
            </div>
*/