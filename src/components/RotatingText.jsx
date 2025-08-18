
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

export default function RotatingText({ prefix }) {
  const { t } = useTranslation('rotatingText');
  const el = useRef(null);
  const phrases = t('phrases', { returnObjects: true });

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 60;
    const pauseBeforeDelete = 1500;
    const pauseBeforeType = 500;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];
      if (!el.current || !currentPhrase) return;

      const fullText = prefix ? `${prefix} ${currentPhrase}` : currentPhrase;

      if (isDeleting) {
        charIndex--;
        el.current.textContent = fullText.substring(0, charIndex);
        el.current.style.borderRightColor = '#ECB807';

        if (charIndex === prefix.length) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          el.current.style.borderRightColor = 'transparent';
          setTimeout(type, pauseBeforeType);
        } else {
          setTimeout(type, deletingSpeed);
        }
      } else {
        charIndex++;
        el.current.textContent = fullText.substring(0, charIndex);
        el.current.style.borderRightColor = '#ECB807';

        if (charIndex === fullText.length) {
          isDeleting = true;
          setTimeout(type, pauseBeforeDelete);
        } else {
          setTimeout(type, typingSpeed);
        }
      }
    };

    charIndex = prefix.length; // Start after prefix
    type();
  }, [phrases, prefix]);

  return (
    <Box
      component="span"
      ref={el}
      sx={{
        display: 'inline-block',
        borderRight: '3px solid #ECB807',
        animation: 'blink 1s infinite',
        '@keyframes blink': {
          '0%, 50%': {
            borderRightColor: '#ECB807',
          },
          '51%, 100%': {
            borderRightColor: 'transparent',
          },
        },
      }}
    />
  );
}
