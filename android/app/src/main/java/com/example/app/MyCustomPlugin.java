package com.example.app;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "myCustomPlugin")
public class MyCustomPlugin extends Plugin {

  @PluginMethod()
  public void execute(PluginCall call){
    JSObject resp = new JSObject();
    System.out.println("Log: From plugin");
    resp.put("message", "Hello world");
    call.resolve(resp);
  }

}
