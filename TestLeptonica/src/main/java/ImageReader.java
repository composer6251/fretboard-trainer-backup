import net.sourceforge.tess4j.Tesseract;
import net.sourceforge.tess4j.TesseractException;

import java.io.File;
import java.util.ArrayList;
import java.util.List;


public class ImageReader {

     /***
      * Downgrade JDK
      * Point Homebrew
      * Add Spring
      */

     public static void main(String[] args) throws TesseractException {
//          System.setProperty()
          System.out.println(System.getProperty("java.library.path"));
          File image = new File("src/main/resources/kindaBlurry.jpg");
          Tesseract tesseract = new Tesseract();
          tesseract.setDatapath("src/main/resources/tessdata");
          tesseract.setLanguage("eng");
          tesseract.setPageSegMode(10);
          tesseract.setOcrEngineMode(1);
          List<String> configs = new ArrayList<>();
          configs.add("davidconfigs");
          tesseract.setConfigs(configs);
          String result = tesseract.doOCR(image);
          System.out.println(result);


     }

}
