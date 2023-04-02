import openai
import pyttsx3
import speech_recognition as sr

def generate_answer(prompt):
    # Configure a API do OpenAI com sua chave
    openai.api_key = "Sua_chave_de_api"

    # Gere uma resposta utilizando o modelo GPT-4
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        temperature=0.8,
        max_tokens=150,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )

    return response.choices[0].text.strip()

def speak_text(text):
    engine = pyttsx3.init()
    engine.setProperty("rate", 150)
    engine.say(text)
    engine.runAndWait()

def main():
    while True:
        # Wait for user to say "genius"
        print("Say 'Genius' to start recording your question...")
        try:
            with sr.Microphone(device_index=7) as source:  # Substitua 7 pelo índice do microfone desejado
                recognizer = sr.Recognizer()
                recognizer.energy_threshold = 3000
                recognizer.pause_threshold = 1
                audio = recognizer.listen(source)
                try:
                    transcription = recognizer.recognize_google(audio)
                    if transcription.lower() == "genius":
                        # Restante do código aqui...
                        print("Listening for your question...")
                        audio = recognizer.listen(source)
                        try:
                            question = recognizer.recognize_google(audio)
                            print("You asked: {}".format(question))
                            response = generate_answer(question)
                            print(response)
                            speak_text(response)
                        except sr.UnknownValueError:
                            print("Google Speech Recognition could not understand audio")
                        except sr.RequestError as e:
                            print("Could not request results from Google Speech Recognition service; {0}".format(e))
                except sr.UnknownValueError:
                    print("Google Speech Recognition could not understand audio")
                except sr.RequestError as e:
                    print("Could not request results from Google Speech Recognition service; {0}".format(e))
        except Exception as e:
            print("An error occurred: {}".format(e))

if __name__ == "__main__":
    main()
