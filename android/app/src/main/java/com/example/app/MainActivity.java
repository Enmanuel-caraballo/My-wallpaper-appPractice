package com.example.app;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  @Override
  protected void onCreate( Bundle savedInstanceState) {
    registerPlugin(MyCustomPlugin.class);
    super.onCreate(savedInstanceState);
  }
}
