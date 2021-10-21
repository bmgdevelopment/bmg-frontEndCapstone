import { useContext, useEffect} from "react"
import { ItemContext } from "../item/ItemProvider"
import { SaveContext } from "./SaveProvider"

export const SaveInfo = () => {
    const { items, getItems } = useContext(ItemContext)
    const { userSaves, getSavesByUserId } = useContext(SaveContext)
    const currentLoggedInUserId = parseInt(sessionStorage.getItem("trendago_user"))

    useEffect(() => {
        getItems().then(getSavesByUserId(currentLoggedInUserId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        items.map(item => {
            const savedItem = userSaves.find(save => save.itemId === item.id) || 0
            if (savedItem) {
                return savedItem
            } 
            return undefined
        }) 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}