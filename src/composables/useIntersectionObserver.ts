/**
 * Composable para Observador de Interseção (Intersection Observer).
 * 
 * Este composable adiciona automaticamente a classe 'is-visible' aos elementos
 * quando eles entram na viewport durante o scroll, ativando as animações CSS.
 * 
 * Uso:
 * ```ts
 * import { useIntersectionObserver } from '@/composables/useIntersectionObserver';
 * 
 * onMounted(() => {
 *   useIntersectionObserver('.fade-in-section');
 * });
 * ```
 * 
 * @module composables/useIntersectionObserver
 */

/**
 * Configuração do Intersection Observer para detectar elementos na viewport.
 * 
 * @param selector - Seletor CSS dos elementos a serem observados
 * @param threshold - Porcentagem do elemento visível para ativar (0.1 = 10%)
 */
export function useIntersectionObserver(selector: string, threshold: number = 0.1): void {
    // Seleciona todos os elementos que correspondem ao seletor
    const elements = document.querySelectorAll(selector);

    if (elements.length === 0) return;

    /**
     * Opções do Intersection Observer.
     * - threshold: Quando 10% do elemento está visível, dispara o callback
     * - rootMargin: Adiciona margem ao viewport (0px = sem margem extra)
     */
    const options = {
        threshold,
        rootMargin: '0px'
    };

    /**
     * Callback executado quando um elemento entra ou sai da viewport.
     * Adiciona a classe 'is-visible' quando o elemento está visível.
     */
    const callback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Elemento entrou na viewport, adiciona classe que ativa animações
                entry.target.classList.add('is-visible');

                // Opcional: Para de observar após ativar (melhora performance)
                // Se quiser que a animação aconteça toda vez que scrollar, remova esta linha
                observer.unobserve(entry.target);
            }
        });
    };

    // Cria o observer
    const observer = new IntersectionObserver(callback, options);

    // Observa todos os elementos selecionados
    elements.forEach((element) => {
        observer.observe(element);
    });
}
