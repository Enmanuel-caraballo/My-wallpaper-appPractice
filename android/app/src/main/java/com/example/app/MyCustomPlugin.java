package com.example.app;

import android.app.WallpaperManager;
import android.content.Context;
import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Build;

import com.capacitorjs.plugins.toast.Toast;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

@CapacitorPlugin(name = "myCustomPlugin")
public class MyCustomPlugin extends Plugin {

  public static  final String CAPACITOR_SHARED_PREFERENCES_NAME = "CapacitorStorage";

  @PluginMethod()
  public void execute(PluginCall call) throws JSONException {
    JSObject resp = new JSObject();
    System.out.println("Log: From plugin");

    SharedPreferences sharedPreferences = getContext().getSharedPreferences(CAPACITOR_SHARED_PREFERENCES_NAME, Context.MODE_PRIVATE);
    System.out.println(sharedPreferences.getAll());

    String urlObject = sharedPreferences.getString("url", "none");
    System.out.println(urlObject);

     new Thread(()->{
       try{
         WallpaperManager wallpaperManager = WallpaperManager.getInstance(getContext());
         Bitmap bitmap = downloadImage(urlObject);

         if(bitmap != null){
          if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N){
            wallpaperManager.setBitmap(bitmap, null, true, WallpaperManager.FLAG_SYSTEM);

          }else{
            wallpaperManager.setBitmap(bitmap);
          }
           System.out.println("Fondo cambiado con exito");

          JSObject result = new JSObject();
          result.put("succes", true);
          call.resolve(result);
         }else{
           call.reject("No se puede descargar la imagen");
         }

       }catch (IOException e){
            e.printStackTrace();
            call.reject("Error: "+ e.getMessage());
       }
     }).start();


    /*if(urlObject.equals("none")){
      call.reject("Image not found");
      return;
    }*/

    //JSONObject url = new JSONObject(urlObject);
    //String signedUrl = url.getString("value");

   /* if(signedUrl.isEmpty()){
      call.reject("No hay imagen");
      return;
    }*/

    //Toast.show(getContext(), "image");
    resp.put("message", "Hello world");
    call.resolve(resp);
  }

  private Bitmap downloadImage(String signedUrl){
    HttpURLConnection connection = null;

    try {
      URL url = new URL(signedUrl);
      connection = (HttpURLConnection) url.openConnection();
      connection.setDoInput(true);
      connection.connect();

      InputStream input = connection.getInputStream();
      return BitmapFactory.decodeStream(input);
    }catch (Exception e){
      e.printStackTrace();
      return null;
    } finally {
      if(connection !=null){
        connection.disconnect();
      }
    }
  }




}
