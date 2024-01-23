from mkdocs.plugins import BasePlugin
from mkdocs.config import config_options

class VideoLightboxPlugin(BasePlugin):
    def on_post_page(self, output_content, config, page, **kwargs):
        # HTML for the lightbox overlay
        lightbox_html = '''
        <div id="video-lightbox" style="display:none;position:fixed;z-index:1000;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,0.5);">
            <video id="lightbox-video" style="width:60%;height:auto;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);" controls></video>
        </div>
        '''

        # JavaScript to handle video click and lightbox
        lightbox_js = '''
        <script>
        document$.subscribe(() => {
            const videos = document.querySelectorAll('video');
            const lightbox = document.getElementById('video-lightbox');
            const lightboxVideo = document.getElementById('lightbox-video');
            
            videos.forEach(video => {
                video.addEventListener('click', () => {
                    lightboxVideo.src = video.src;
                    lightbox.style.display = 'block';
                    lightboxVideo.play();
                });
            });
            
            lightbox.addEventListener('click', () => {
                lightboxVideo.pause();
                lightbox.style.display = 'none';
            });
        });
        </script>
        '''

        # Add the lightbox HTML and JavaScript to the bottom of the page
        return output_content + lightbox_html + lightbox_js
