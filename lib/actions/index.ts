"use sever"

export async function scrapeANdStroeProduct(productURL: string) {
 if(!productURL) return;

 try {
    const scrapedProduct = await
     scrapeAmazonProduct(productURL);

 } catch (error: any) {
    throw new Error(`Falied to create/update product: ${error.message}`)
 }
    
}
