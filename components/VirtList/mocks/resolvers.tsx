import { placeholderAuthors, placeholderTitles } from "./placeholderData";
import { Build } from "../VirtList.types";

export const resolveGetBuilds = ( req, res, ctx ) => {
    const getRandomItem = items => items[Math.floor( Math.random() * items.length )];

    const generatedBuilds: Build[] = Array.from( { length: 20 }, _ => ( {
        author: getRandomItem( placeholderAuthors ),
        title: getRandomItem( placeholderTitles )
    } ) )

    return res(
        ctx.status( 200 ),
        ctx.json( {
            builds: generatedBuilds,
            current_page: 1,
            total_pages: 3
        } )
    )
}