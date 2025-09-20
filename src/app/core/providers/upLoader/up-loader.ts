import { Injectable } from '@angular/core';
import { supabase } from 'src/app/database/supabase';

@Injectable({
  providedIn: 'root'
})
export class UpLoader {
  async upload(bucket: string, name: string, type: string, d: string){


  const { data, error} =  await supabase.storage.from(bucket).upload(`/${name}`,
     Uint8Array.from(atob(d), c => c.charCodeAt(0)), {
      contentType: type,
      upsert: true,
      cacheControl: '3600',
    });
    console.log(error);
    console.log(data);

    return data?.path || '';
  }

  async getUrl(bucket: string, path: string): Promise<string>{

    const {data, error} = await supabase.storage.from(bucket).createSignedUrl(path, 86400);

    return data?.signedUrl || '';
  }


  // async getUrls(bucket: string, path: string[]){

  //   const d = await supabase.storage.from(bucket).list('', {
  //     limit: 10,
  //     offset: 0,
  //   }
  // ).then((objeto) =>{
  //  return objeto.data?.map(p => p.name)
  // })

  //const {data, error} = await supabase.storage.from(bucket).createSignedUrls(path, 60)

  // }
}
