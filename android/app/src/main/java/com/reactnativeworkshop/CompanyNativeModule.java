package com.reactnativeworkshop;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.util.Log;

/**
 * Native Module to handle account related calls from React-Native component.
 */
public class CompanyNativeModule extends ReactContextBaseJavaModule {
    public CompanyNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    /**
     * This method logs the info message of companyName in the android log file.
     *
     * @param companyName The companyName that was selected by the user.
     */
    @ReactMethod
    @SuppressWarnings("unused")
    public static void select(String companyName) {
      Log.i("CompanyNativeModule", "Selected companyName=" + companyName);
    }

    @Override
    public String getName() {
        return "CompanyNativeModule";
    }
}
